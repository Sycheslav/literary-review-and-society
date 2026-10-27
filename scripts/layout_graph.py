"""Фиксированная укладка графа: направления по кругу, работы — силовой укладкой вокруг них.

Запуск: python scripts/layout_graph.py  (читает public/corpus/graph.json, пишет data/layout.json)
"""
import json
import math
import os

import networkx as nx

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
src = json.load(open(os.path.join(ROOT, "public", "corpus", "graph.json"), encoding="utf-8"))
curation = json.load(open(os.path.join(ROOT, "data", "curation.json"), encoding="utf-8"))
excluded = set(curation["remove"]) | set(curation["attach"])

works = {n["id"]: n for n in src["nodes"] if n["type"] == "work" and n["id"] not in excluded}
topics = {n["id"]: n for n in src["nodes"] if n["type"] == "topic"}

G = nx.Graph()
G.add_nodes_from(works)
G.add_nodes_from(topics)
for e in src["edges"]:
    s, t = e["source"], e["target"]
    if s in works and t in topics:
        G.add_edge(s, t, weight=1.0)
    elif s in works and t in works and s != t:
        G.add_edge(s, t, weight=0.35)

# Порядок направлений по кругу: соседние темы — те, что чаще делят работы.
co = nx.Graph()
co.add_nodes_from(topics)
for w in works.values():
    ts = ["topic-" + t for t in w.get("topics", []) if "topic-" + t in topics]
    for i in range(len(ts)):
        for j in range(i + 1, len(ts)):
            a, b = ts[i], ts[j]
            co.add_edge(a, b, weight=co.get_edge_data(a, b, {"weight": 0})["weight"] + 1)
tp = nx.spring_layout(co, weight="weight", seed=11, iterations=300)
order = sorted(topics, key=lambda t: math.atan2(tp[t][1], tp[t][0]))
R = 1.4
fixed = {}
for i, t in enumerate(order):
    a = 2 * math.pi * i / len(order) - math.pi / 2
    fixed[t] = (R * math.cos(a), R * math.sin(a))

pos = nx.spring_layout(
    G, pos=fixed, fixed=list(fixed), weight="weight", k=0.085, iterations=400, seed=7
)

SCALE = 900
out = {nid: [round(p[0] * SCALE, 1), round(p[1] * SCALE, 1)] for nid, p in pos.items()}
os.makedirs(os.path.join(ROOT, "data"), exist_ok=True)
json.dump(out, open(os.path.join(ROOT, "data", "layout.json"), "w", encoding="utf-8"))
print(len(out), "nodes;", "isolated:", [n for n in G if G.degree(n) == 0][:10])
