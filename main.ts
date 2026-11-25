// One-Liner Marathon — make.fun bounty entry
// Writes the one-line joke to /output/entry.txt.
// Deterministic: no network, no randomness, no dependencies.
// The joke is a single line, 139 characters — the gate allows 1–280 characters of UTF-8 text.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My crypto portfolio told me 'we need to talk' — then it just kept shrinking and refused to explain itself, like a breakup with a pie chart.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
