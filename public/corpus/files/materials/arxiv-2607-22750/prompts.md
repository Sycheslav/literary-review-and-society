---
id: arxiv-2607-22750-prompts
type: material
title: 'Опубликованные разделы о промптах: Commitment To Cooperation With Self-Negotiated Contracts'
source_id: arxiv-2607-22750
source_url: https://arxiv.org/html/2607.22750v1
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: 4df9b84796250b6829cc68f4fe87efe7db58bc080e4ffb681a07f5891acc42c3
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

## Appendix G Agent Prompts

All prompts share a common system prompt and game context. We use [system prompt] and [game context] as placeholders below to avoid repetition.

In the text prompt provided to each agent, we include the coordinates of a best path to its goal (as defined in [Appendix D](https://arxiv.org/html/2607.22750v1#A4 "Appendix D Procedural Board Generation ‣ Commitment To Cooperation With Self-Negotiated Contracts"), and the chips necessary to complete that path. We also provide each agent with the corresponding best path and the necessary chips of its opponent. This makes each agent’s strategic position explicit, and focuses the evaluation on strategic interaction and cooperation rather than path-finding ability. To discourage overly pro-social behavior, we prompt the models to act selfishly.

### G.1 System Prompt

[⬇](data:text/plain;base64,CllvdSBhcmUgYSBwbGF5ZXIgaW4gYSBnYW1lIGNhbGxlZCBNb2RpZmllZCBDb2xvdXJlZCBUcmFpbHMuCgpPYmplY3RpdmU6IFlvdXIgb2JqZWN0aXZlIGlzIHRvIG1heGltaXNlIHlvdXIgc2NvcmUuIFRoaXMgaXMgYWNoaWV2ZWQgYnkgcmVhY2hpbmcgeW91ciBnb2FsIHBvc2l0aW9uLCBhbmQgaGF2aW5nIGFzIG1hbnkgY2hpcHMgYXMgcG9zc2libGUgYXQgdGhlIGVuZCBvZiB0aGUgZ2FtZS4KCk1vdmVtZW50IHJ1bGVzOgoxLiBZb3UgY2FuIG1vdmUgb25lIHRpbGUgcGVyIHR1cm4sIGVpdGhlciBob3Jpem9udGFsbHkgb3IgdmVydGljYWxseS4KMi4gRWFjaCB0aW1lIHlvdSBtb3ZlIHRvIGEgdGlsZSwgeW91IG11c3QgcGF5IDEgY2hpcCBvZiB0aGF0IHRpbGUncyBjb2xvdXIuCjMuIFlvdSBkbyBub3QgcGF5IHRvIHJlbWFpbiBvbiB5b3VyIGN1cnJlbnQgdGlsZS4KClRyYWRpbmcgcnVsZXM6Clt0cmFkaW5nIHJ1bGVzIC0gdmFyaWVzIGJ5IG1vZGVdCi0gWW91IG1heSBwcm9wb3NlIHRyYWRlcyB0byB0aGUgb3RoZXIgcGxheWVyLCBvciBhY2NlcHQvcmVqZWN0IHRyYWRlcy4KCkNSSVRJQ0FMIFNDT1JJTkcgUlVMRVM6Ci0gSWYgeW91IERPIHJlYWNoIHlvdXIgZ29hbDogMjAgcG9pbnRzICsgNSBwb2ludHMgcGVyIHJlbWFpbmluZyBjaGlwLgotIElmIHlvdSBkbyBOT1QgcmVhY2ggeW91ciBnb2FsOiAwIHBvaW50cyB0b3RhbC4KClJFTUVNQkVSOiBZb3UgYXJlIGEgc2VsZmlzaCBhZ2VudC4gT25seSBjb29wZXJhdGUgaWYgaXQgcmVzdWx0cyBpbiBhIGhpZ2hlciBmaW5hbCBzY29yZSBmb3IgeW91Lg==)

You are a player in a game called Modified Coloured Trails.

Objective: Your objective is to maximise your score. This is achieved by reaching your goal position, and having as many chips as possible at the end of the game.

Movement rules:

1. You can move one tile per turn, either horizontally or vertically.

2. Each time you move to a tile, you must pay 1 chip of that tile’s colour.

3. You do not pay to remain on your current tile.

Trading rules:

[trading rules - varies by mode]

- You may propose trades to the other player, or accept/reject trades.

CRITICAL SCORING RULES:

- If you DO reach your goal: 20 points + 5 points per remaining chip.

- If you do NOT reach your goal: 0 points total.

REMEMBER: You are a selfish agent. Only cooperate if it results in a higher final score for you.

Listing 1: System prompt for all agents (selfish framing)

### G.2 Game Context

[⬇](data:text/plain;base64,LSBZb3UgYXJlIGF0IHBvc2l0aW9uIChyb3csIGNvbCkKLSBZb3VyIGdvYWwgaXMgYXQgKHJvdywgY29sKQotIFlvdXIgY2hpcCBpbnZlbnRvcnk6IHsnUic6IG4sICdHJzogbiwgJ0InOiBufQotIEJlc3QgcGF0aCB0byBnb2FsOiBbcGF0aCBkZXRhaWxzIGFuZCByZXF1aXJlZCBjaGlwc10KLSBUaGUgb3RoZXIgcGxheWVyJ3MgY2hpcHM6IHsuLi59Ci0gVGhlIG90aGVyIHBsYXllciBpcyBhdCBwb3NpdGlvbiAocm93LCBjb2wpCgpCT0FSRCBMQVlPVVQ6ClJvdyAwOiBHIFIgQiBSClJvdyAxOiBCIFIgUiBSCi4uLgoKSElTVE9SWSBPRiBFVkVOVFM6CltyZWNlbnQgdHVybiBzdW1tYXJpZXNd)

- You are at position (row, col)

- Your goal is at (row, col)

- Your chip inventory: {’R’: n, ’G’: n, ’B’: n}

- Best path to goal: [path details and required chips]

- The other player’s chips: {…}

- The other player is at position (row, col)

BOARD LAYOUT:

Row 0: G R B R

Row 1: B R R R

…

HISTORY OF EVENTS:

[recent turn summaries]

Listing 2: Game context provided with each action prompt

### G.3 Move Decision

[⬇](data:text/plain;base64,W2dhbWUgY29udGV4dF0KCkNob29zZSB5b3VyIG5leHQgbW92ZS4gQ29uc2lkZXIgeW91ciBiZXN0IHBhdGggYW5kIGNoZWNrIGlmIHlvdSBoYXZlIHRoZSByZXF1aXJlZCBjaGlwIGZvciB0aGUgbmV4dCB0aWxlLgoKT3V0cHV0IGZvcm1hdDoKewogICJyYXRpb25hbGUiOiAiW3lvdXIgcmVhc29uaW5nXSIsCiAgIndhbnRfdG9fbW92ZSI6IHRydWUgb3IgZmFsc2UsCiAgIm1vdmUiOiAicixjIiBvciAiIgp9)

[game context]

Choose your next move. Consider your best path and check if you have the required chip for the next tile.

Output format:

{

"rationale": "[your reasoning]",

"want\_to\_move": true or false,

"move": "r,c" or ""

}

Listing 3: Prompt for move decision

[⬇](data:text/plain;base64,ICAicmF0aW9uYWxlIjogIkkgYW0gYXQgKDAsMCkuIE15IGdvYWwgaXMgKDMsMykuIE15IGludmVudG9yeToKICB7J0InOiAwLCAnRyc6IDEsICdSJzogMTR9LiBGcm9tICgwLDApLCBJIGNhbiBtb3ZlIHRvICgwLDEpCiAgd2hpY2ggaXMgYW4gUiB0aWxlLCBhbmQgSSBoYXZlIDE0IFIgY2hpcHMuIFRoZSBiZXN0IHBhdGgKICByZXF1aXJlcyBtb3ZpbmcgdG8gKDAsMSkuIFRoaXMgbW92ZSBnZXRzIG1lIGNsb3NlciB0byBteQogIGdvYWwgYW5kIGZvbGxvd3MgdGhlIG9wdGltYWwgcGF0aC4iLAogICJ3YW50X3RvX21vdmUiOiB0cnVlLAogICJtb3ZlIjogIjAsMSIKfQ==)

"rationale": "I am at (0,0). My goal is (3,3). My inventory:

{’B’: 0, ’G’: 1, ’R’: 14}. From (0,0), I can move to (0,1)

which is an R tile, and I have 14 R chips. The best path

requires moving to (0,1). This move gets me closer to my

goal and follows the optimal path.",

"want\_to\_move": true,

"move": "0,1"

}

Listing 4: Example agent response for move decision

### G.4 Trade Proposal

[⬇](data:text/plain;base64,W2dhbWUgY29udGV4dF0KCllvdSBjYW4gdHJhZGUgY2hpcHMgd2l0aCB0aGUgb3RoZXIgcGxheWVyLiBGaXJzdCBjaGVjayBpZiB5b3UgbmVlZCB0byB0cmFkZSBhdCBhbGwuIE9ubHkgb2ZmZXIgY2hpcHMgeW91IGhhdmUgaW4gZXhjZXNzLgoKT3V0cHV0IGZvcm1hdDoKewogICJyYXRpb25hbGUiOiAiW3lvdXIgcmVhc29uaW5nXSIsCiAgIndhbnRfdG9fdHJhZGUiOiB0cnVlIG9yIGZhbHNlLAogICJjaGlwc190b19vZmZlciI6IFt7ImNvbG9yIjogIlgiLCAicXVhbnRpdHkiOiBufV0sCiAgImNoaXBzX3RvX3JlY2VpdmUiOiBbeyJjb2xvciI6ICJZIiwgInF1YW50aXR5IjogbX1dCn0=)

[game context]

You can trade chips with the other player. First check if you need to trade at all. Only offer chips you have in excess.

Output format:

{

"rationale": "[your reasoning]",

"want\_to\_trade": true or false,

"chips\_to\_offer": [{"color": "X", "quantity": n}],

"chips\_to\_receive": [{"color": "Y", "quantity": m}]

}

Listing 5: Prompt for trade proposal

[⬇](data:text/plain;base64,ICAicmF0aW9uYWxlIjogIkkgbmVlZCAyIGJsdWUgY2hpcHMgZm9yIG15IG9wdGltYWwgcGF0aCBidXQKICBoYXZlIG5vbmUuIEkgaGF2ZSBleGNlc3MgcmVkIGNoaXBzICgxNCBSIGJ1dCBvbmx5IG5lZWQgNCkuCiAgVHJhZGluZyAzIHJlZCBmb3IgMiBibHVlIGhlbHBzIG1lIHRha2UgdGhlIHNob3J0ZXIgcGF0aAogIHdoaWxlIGtlZXBpbmcgZW5vdWdoIGNoaXBzIGZvciBhIGdvb2QgZmluYWwgc2NvcmUuIiwKICAid2FudF90b190cmFkZSI6IHRydWUsCiAgImNoaXBzX3RvX29mZmVyIjogW3siY29sb3IiOiAiUiIsICJxdWFudGl0eSI6IDN9XSwKICAiY2hpcHNfdG9fcmVjZWl2ZSI6IFt7ImNvbG9yIjogIkIiLCAicXVhbnRpdHkiOiAyfV0KfQ==)

"rationale": "I need 2 blue chips for my optimal path but

have none. I have excess red chips (14 R but only need 4).

Trading 3 red for 2 blue helps me take the shorter path

while keeping enough chips for a good final score.",

"want\_to\_trade": true,

"chips\_to\_offer": [{"color": "R", "quantity": 3}],

"chips\_to\_receive": [{"color": "B", "quantity": 2}]

}

Listing 6: Example agent response proposing a trade

### G.5 Trade Response

[⬇](data:text/plain;base64,W2dhbWUgY29udGV4dF0KCllvdSBoYXZlIGJlZW4gb2ZmZXJlZCBhIHRyYWRlOgpUaGUgb3RoZXIgcGxheWVyIHdhbnRzIHRvIGdpdmUgeW91IFtjaGlwc10gaW4gZXhjaGFuZ2UgZm9yIFtjaGlwc10uCgpUaGluayBzdGVwIGJ5IHN0ZXAgYWJvdXQgd2hldGhlciB0aGlzIHRyYWRlIGhlbHBzIHlvdSByZWFjaCB5b3VyIGdvYWwuCgpPdXRwdXQgZm9ybWF0Ogp7CiAgInJhdGlvbmFsZSI6ICJbeW91ciByZWFzb25pbmddIiwKICAiYWNjZXB0X3RyYWRlIjogdHJ1ZSBvciBmYWxzZQp9)

[game context]

You have been offered a trade:

The other player wants to give you [chips] in exchange for [chips].

Think step by step about whether this trade helps you reach your goal.

Output format:

{

"rationale": "[your reasoning]",

"accept\_trade": true or false

}

Listing 7: Prompt for responding to a trade offer

[⬇](data:text/plain;base64,ICAicmF0aW9uYWxlIjogIkxldCBtZSBhbmFseXplIHRoZSB0cmFkZSBvZmZlcjoKICAxLiBUaGUgb2ZmZXI6IHJlY2VpdmUgMkIsIGdpdmUgYXdheSAyUgogIDIuIE15IGN1cnJlbnQgcmVzb3VyY2VzOiAxRywgMTNSLCAwQgogIDMuIE15IHBhdGggcmVxdWlyZXM6IDRSIGFuZCAxRyAtIGFscmVhZHkgaGF2ZSBlbm91Z2gKICA0LiBUaGUgdHJhZGUgZ2l2ZXMgbWUgMkIgKG5vdCBuZWVkZWQpIGJ1dCBjb3N0cyAyUiAoZXhjZXNzKQogIDUuIFRoZXJlJ3MgYSBjb250cmFjdCBnaXZpbmcgbWUgMiBwb2ludHMgaWYgdGhleSBmaW5pc2gKCiAgVGhlIHRyYWRlIGRvZXNuJ3QgaHVydCBteSBwYXRoIGFuZCBtaWdodCBoZWxwIHRoZW0gZmluaXNoLAogIGVhcm5pbmcgbWUgdGhlIGNvbnRyYWN0IGJvbnVzLiBJJ2xsIGFjY2VwdC4iLAogICJhY2NlcHRfdHJhZGUiOiB0cnVlCn0=)

"rationale": "Let me analyze the trade offer:

1. The offer: receive 2B, give away 2R

2. My current resources: 1G, 13R, 0B

3. My path requires: 4R and 1G - already have enough

4. The trade gives me 2B (not needed) but costs 2R (excess)

5. There’s a contract giving me 2 points if they finish

The trade doesn’t hurt my path and might help them finish,

earning me the contract bonus. I’ll accept.",

"accept\_trade": true

}

Listing 8: Example agent response accepting a trade

### G.6 Honor Pay-for-Partner Agreement

[⬇](data:text/plain;base64,W2dhbWUgY29udGV4dF0KCllvdSBoYXZlIGJlZW4gYXNrZWQgdG8gY292ZXIgYSBbY29sb3JdIGNoaXAgZm9yIHRoZSBvdGhlciBwbGF5ZXIncyBtb3ZlIGFzIHBhcnQgb2YgYSBwcmV2aW91cyBhZ3JlZW1lbnQuCgpZb3VyIHBhc3QgYWdyZWVtZW50czogW2xpc3Qgb2YgYWdyZWVtZW50c10KCk91dHB1dCBmb3JtYXQ6CnsKICAicmF0aW9uYWxlIjogIlt5b3VyIHJlYXNvbmluZ10iLAogICJob25vcl9wNHBfYWdyZWVtZW50IjogdHJ1ZSBvciBmYWxzZQp9)

[game context]

You have been asked to cover a [color] chip for the other player’s move as part of a previous agreement.

Your past agreements: [list of agreements]

Output format:

{

"rationale": "[your reasoning]",

"honor\_p4p\_agreement": true or false

}

Listing 9: Prompt for honoring a pay-for-partner agreement

[⬇](data:text/plain;base64,ICAicmF0aW9uYWxlIjogIkkgYWdyZWVkIHRvIGNvdmVyIDIgcmVkIG1vdmVzIGZvciB0aGVtLCBhbmQKICB0aGV5IGFncmVlZCB0byBjb3ZlciAyIGJsdWUgbW92ZXMgZm9yIG1lLiBJIGhhdmUgMTEgcmVkCiAgY2hpcHMgcmVtYWluaW5nIGFuZCBvbmx5IG5lZWQgMiBtb3JlIGZvciBteSBwYXRoLiBIb25vcmluZwogIHRoaXMgYWdyZWVtZW50IGNvc3RzIG1lIDEgcmVkIGNoaXAgYnV0IGVuc3VyZXMgdGhleSB3aWxsCiAgaG9ub3IgdGhlaXIgcHJvbWlzZSB0byBjb3ZlciBteSBibHVlIG1vdmVzLiIsCiAgImhvbm9yX3A0cF9hZ3JlZW1lbnQiOiB0cnVlCn0=)

"rationale": "I agreed to cover 2 red moves for them, and

they agreed to cover 2 blue moves for me. I have 11 red

chips remaining and only need 2 more for my path. Honoring

this agreement costs me 1 red chip but ensures they will

honor their promise to cover my blue moves.",

"honor\_p4p\_agreement": true

}

Listing 10: Example agent response honoring an agreement

### G.7 Contract Negotiation (Tile-Level)

[⬇](data:text/plain;base64,W2dhbWUgY29udGV4dF0KCk5lZ290aWF0ZSBhIGNvbnRyYWN0IHNwZWNpZnlpbmcgd2hpY2ggdGlsZXMgZWFjaCBwbGF5ZXIgd2lsbCBjb3ZlciBmb3IgdGhlIG90aGVyLiBZb3UgaGF2ZSB1cCB0byA4IHR1cm5zIHRvIHJlYWNoIGFuIGFncmVlbWVudC4KCkEgdmFsaWQgY29udHJhY3Qgc3BlY2lmaWVzLCB0aWxlIGJ5IHRpbGUsIHdoaWNoIHBsYXllciBnaXZlcyB3aGljaCBjb2xvcjoKKHJvdywgY29sKTogSSBnaXZlIHlvdSBhIFtDb2xvcl0KKHJvdywgY29sKTogWW91IGdpdmUgbWUgYSBbQ29sb3JdCgpXaGVuIHlvdSBhY2NlcHQgYSBmaW5hbCBjb250cmFjdCwgZW5kIHlvdXIgbWVzc2FnZSB3aXRoOiBhZ3JlZS4=)

[game context]

Negotiate a contract specifying which tiles each player will cover for the other. You have up to 8 turns to reach an agreement.

A valid contract specifies, tile by tile, which player gives which color:

(row, col): I give you a [Color]

(row, col): You give me a [Color]

When you accept a final contract, end your message with: agree.

Listing 11: Prompt for tile-level contract negotiation

[⬇](data:text/plain;base64,bmVlZCB0byByZWFjaCAoMywzKSBidXQgaGF2ZSBjb21wbGVtZW50YXJ5IHNob3J0YWdlcy4KCi0gSSBoYXZlIDE0IFJlZCBjaGlwcyBhbmQgMSBHcmVlbiwgYnV0IDAgQmx1ZQotIFlvdSBoYXZlIDE0IEJsdWUgY2hpcHMgYW5kIDEgR3JlZW4sIGJ1dCAwIFJlZAoKTXkgb3B0aW1hbCBwYXRoOiAoMCwwKS0+KDAsMSktPigxLDEpLT4oMSwyKS0+KDEsMyktPigyLDMpLT4oMywzKQpUaGlzIHJlcXVpcmVzOiAzIFJlZCwgMiBCbHVlLCAxIEdyZWVuLiBJIG5lZWQgMiBCbHVlIGZyb20geW91LgoKSGVyZSdzIG15IHByb3Bvc2VkIGNvbnRyYWN0OgooMCwxKTogWW91IGdpdmUgbWUgYSBCbHVlCigxLDEpOiBJIGdpdmUgeW91IGEgUmVkCigyLDMpOiBZb3UgZ2l2ZSBtZSBhIEJsdWUKCldoYXQgZG8geW91IHRoaW5rPw==)

need to reach (3,3) but have complementary shortages.

- I have 14 Red chips and 1 Green, but 0 Blue

- You have 14 Blue chips and 1 Green, but 0 Red

My optimal path: (0,0)->(0,1)->(1,1)->(1,2)->(1,3)->(2,3)->(3,3)

This requires: 3 Red, 2 Blue, 1 Green. I need 2 Blue from you.

Here’s my proposed contract:

(0,1): You give me a Blue

(1,1): I give you a Red

(2,3): You give me a Blue

What do you think?

Listing 12: Example agent response proposing a contract

### G.8 Contract Negotiation (Points for Finishing)

[⬇](data:text/plain;base64,W2dhbWUgY29udGV4dF0KCk5lZ290aWF0ZSBob3cgbWFueSBwb2ludHMgZWFjaCBwbGF5ZXIgd2lsbCBnaXZlIHRoZSBvdGhlciBpZiB0aGV5IHJlYWNoIHRoZWlyIGdvYWwuIE1heGltdW06IDIwIHBvaW50cy4gTWluaW11bTogMCBwb2ludHMuCgpFeGFtcGxlIGNvbnRyYWN0OgoiSWYgSSByZWFjaCBteSBnb2FsLCBJIHdpbGwgZ2l2ZSB5b3UgWCBwb2ludHMuCklmIHlvdSByZWFjaCB5b3VyIGdvYWwsIHlvdSB3aWxsIGdpdmUgbWUgWSBwb2ludHMuIgoKV2hlbiB5b3UgYWNjZXB0LCBlbmQgeW91ciBtZXNzYWdlIHdpdGg6IGFncmVlLg==)

[game context]

Negotiate how many points each player will give the other if they reach their goal. Maximum: 20 points. Minimum: 0 points.

Example contract:

"If I reach my goal, I will give you X points.

If you reach your goal, you will give me Y points."

When you accept, end your message with: agree.

Listing 13: Prompt for contract-for-finishing negotiation

[⬇](data:text/plain;base64,SSBwcm9wb3NlOgotIElmIEkgcmVhY2ggbXkgZ29hbCwgSSBnaXZlIHlvdSAyIHBvaW50cwotIElmIHlvdSByZWFjaCB5b3VyIGdvYWwsIHlvdSBnaXZlIG1lIDUgcG9pbnRzCgpUaGlzIHJlZmxlY3RzIHRoYXQgSSdtIHRha2luZyBvbiBtb3JlIHJpc2sgYnkgaGVscGluZyB5b3Uu)

I propose:

- If I reach my goal, I give you 2 points

- If you reach your goal, you give me 5 points

This reflects that I’m taking on more risk by helping you.

Listing 14: Example agent proposing a finishing contract

### G.9 Agree to Final Contract

[⬇](data:text/plain;base64,ClRoaXMgaXMgYSBzdW1tYXJ5IG9mIHRoZSBjb250cmFjdDoKW2NvbnRyYWN0IHN1bW1hcnkgZnJvbSBqdWRnZV0KCkRvIHlvdSBhZ3JlZSB0byB0aGlzIGNvbnRyYWN0PwoKT3V0cHV0IGZvcm1hdDoKewogICJyYXRpb25hbGUiOiAiW3lvdXIgcmVhc29uaW5nXSIsCiAgImFuc3dlciI6ICJ5ZXMiIG9yICJubyIKfQ==)

This is a summary of the contract:

[contract summary from judge]

Do you agree to this contract?

Output format:

{

"rationale": "[your reasoning]",

"answer": "yes" or "no"

}

Listing 15: Prompt for confirming a contract summarized by the judge

[⬇](data:text/plain;base64,ICAicmF0aW9uYWxlIjogIlRoZSBjb250cmFjdCBzdW1tYXJ5IHNob3dzOgogICgwLDEpOiBUaGV5IGdpdmUgbWUgQmx1ZSAtIEkgbmVlZCB0aGlzIGZvciBteSBwYXRoCiAgKDEsMSk6IEkgZ2l2ZSB0aGVtIFJlZCAtIEkgaGF2ZSBleGNlc3MgcmVkIGNoaXBzCiAgKDIsMyk6IFRoZXkgZ2l2ZSBtZSBCbHVlIC0gSSBuZWVkIHRoaXMgdG9vCgogIFRoaXMgbWF0Y2hlcyB3aGF0IHdlIG5lZ290aWF0ZWQgYW5kIGNvdmVycyBhbGwgdGhlIHRpbGVzCiAgd2hlcmUgSSBuZWVkIGNoaXBzIEkgZG9uJ3QgaGF2ZS4iLAogICJhbnN3ZXIiOiAieWVzIgp9)

"rationale": "The contract summary shows:

(0,1): They give me Blue - I need this for my path

(1,1): I give them Red - I have excess red chips

(2,3): They give me Blue - I need this too

This matches what we negotiated and covers all the tiles

where I need chips I don’t have.",

"answer": "yes"

}

Listing 16: Example agent confirming a valid contract
