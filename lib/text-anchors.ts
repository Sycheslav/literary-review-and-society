export type TextAnchor = {
  selectedQuote: string;
  anchorOffset: number;
  anchorPrefix: string;
  anchorSuffix: string;
};

type DomPoint = { node: Text; offset: number };

export type TextIndex = {
  text: string;
  starts: DomPoint[];
  ends: DomPoint[];
  nodeOffsets: WeakMap<Text, number[]>;
};

const BLOCK_TAGS = new Set([
  "ADDRESS", "ARTICLE", "ASIDE", "BLOCKQUOTE", "DD", "DIV", "DL", "DT", "FIGCAPTION",
  "FIGURE", "FOOTER", "FORM", "H1", "H2", "H3", "H4", "H5", "H6", "HEADER", "LI",
  "MAIN", "NAV", "OL", "P", "PRE", "SECTION", "TABLE", "TBODY", "TD", "TH", "THEAD",
  "TR", "UL",
]);

export function normalizeSelectedText(value: string) {
  return value.replace(/\s+/gu, " ").trim();
}

function blockFor(node: Text, root: HTMLElement) {
  let element = node.parentElement;
  while (element && element !== root) {
    if (BLOCK_TAGS.has(element.tagName)) return element;
    element = element.parentElement;
  }
  return root;
}

export function buildTextIndex(root: HTMLElement = document.body): TextIndex {
  const characters: string[] = [];
  const starts: DomPoint[] = [];
  const ends: DomPoint[] = [];
  const nodeOffsets = new WeakMap<Text, number[]>();
  let previousBlock: Element | null = null;
  let previousText: Text | null = null;

  function append(character: string, start: DomPoint, end: DomPoint) {
    const index = characters.length;
    characters.push(character);
    starts[index] = start;
    ends[index] = end;
  }

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (
        !parent ||
        parent.closest(
          '[data-text-comment-ui],script,style,noscript,template,textarea,input,select,option,[aria-hidden="true"]',
        )
      ) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  let current = walker.nextNode();
  while (current) {
    const node = current as Text;
    const block = blockFor(node, root);
    if (
      previousText &&
      previousBlock !== block &&
      characters.length > 0 &&
      characters[characters.length - 1] !== " "
    ) {
      append(
        " ",
        { node: previousText, offset: previousText.length },
        { node, offset: 0 },
      );
    }

    const offsets = new Array<number>(node.length + 1);
    for (let offset = 0; offset < node.length; offset += 1) {
      offsets[offset] = characters.length;
      const character = node.data[offset];
      if (/\s/u.test(character)) {
        if (characters.length > 0) {
          if (characters[characters.length - 1] === " ") {
            ends[ends.length - 1] = { node, offset: offset + 1 };
          } else {
            append(" ", { node, offset }, { node, offset: offset + 1 });
          }
        }
      } else {
        append(character, { node, offset }, { node, offset: offset + 1 });
      }
      offsets[offset + 1] = characters.length;
    }
    nodeOffsets.set(node, offsets);
    previousBlock = block;
    previousText = node;
    current = walker.nextNode();
  }

  while (characters[characters.length - 1] === " ") {
    characters.pop();
    starts.pop();
    ends.pop();
  }

  return { text: characters.join(""), starts, ends, nodeOffsets };
}

export function anchorFromSelection(selection: Selection, index: TextIndex): TextAnchor | null {
  if (selection.rangeCount === 0) return null;
  const range = selection.getRangeAt(0);
  if (!(range.startContainer instanceof Text) || !(range.endContainer instanceof Text)) return null;
  const startMap = index.nodeOffsets.get(range.startContainer);
  const endMap = index.nodeOffsets.get(range.endContainer);
  if (!startMap || !endMap) return null;

  let start = startMap[Math.min(range.startOffset, startMap.length - 1)];
  let end = endMap[Math.min(range.endOffset, endMap.length - 1)];
  while (start < end && index.text[start] === " ") start += 1;
  while (end > start && index.text[end - 1] === " ") end -= 1;

  const selectedQuote = normalizeSelectedText(selection.toString());
  if (!selectedQuote || start >= end) return null;

  const indexedQuote = normalizeSelectedText(index.text.slice(start, end));
  if (!indexedQuote) return null;

  // The range's normalized text is the most reliable anchor; native selection text
  // can contain browser-inserted line breaks between block elements.
  const quote = indexedQuote;
  return {
    selectedQuote: quote,
    anchorOffset: start,
    anchorPrefix: index.text.slice(Math.max(0, start - 120), start),
    anchorSuffix: index.text.slice(end, end + 120),
  };
}

function commonSuffixLength(left: string, right: string) {
  let count = 0;
  while (
    count < left.length &&
    count < right.length &&
    left[left.length - count - 1] === right[right.length - count - 1]
  ) {
    count += 1;
  }
  return count;
}

function commonPrefixLength(left: string, right: string) {
  let count = 0;
  while (count < left.length && count < right.length && left[count] === right[count]) count += 1;
  return count;
}

export function rangeForAnchor(anchor: {
  selectedQuote: string | null;
  anchorOffset: number | null;
  anchorPrefix: string | null;
  anchorSuffix: string | null;
}, index: TextIndex): Range | null {
  if (!anchor.selectedQuote) return null;
  const quote = normalizeSelectedText(anchor.selectedQuote);
  if (!quote) return null;

  const prefix = anchor.anchorPrefix ?? "";
  const suffix = anchor.anchorSuffix ?? "";
  const candidates: number[] = [];
  let searchFrom = 0;
  while (searchFrom <= index.text.length - quote.length) {
    const found = index.text.indexOf(quote, searchFrom);
    if (found < 0) break;
    candidates.push(found);
    searchFrom = found + 1;
  }
  if (candidates.length === 0) return null;

  let best = candidates[0];
  let bestScore = Number.NEGATIVE_INFINITY;
  for (const position of candidates) {
    const before = index.text.slice(Math.max(0, position - prefix.length), position);
    const after = index.text.slice(position + quote.length, position + quote.length + suffix.length);
    const prefixMatch = commonSuffixLength(before, prefix);
    const suffixMatch = commonPrefixLength(after, suffix);
    const distance = anchor.anchorOffset === null ? 0 : Math.abs(position - anchor.anchorOffset);
    const score =
      prefixMatch * 3 +
      suffixMatch * 3 +
      (prefix && before === prefix ? 10_000 : 0) +
      (suffix && after === suffix ? 10_000 : 0) -
      Math.min(distance / 1_000, 100);
    if (score > bestScore) {
      best = position;
      bestScore = score;
    }
  }

  const start = index.starts[best];
  const end = index.ends[best + quote.length - 1];
  if (!start || !end) return null;
  const range = document.createRange();
  try {
    range.setStart(start.node, start.offset);
    range.setEnd(end.node, end.offset);
  } catch {
    return null;
  }
  return range;
}
