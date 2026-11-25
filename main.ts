// The 3AM Fridge Text — program/v1 entry (Node 22, no network, no dependencies).
//
// Writes the single-line text a smart fridge sends its owner at 3am to
// /output/entry.txt (or $OUTPUT_DIR/entry.txt when testing locally).
// The gate requires UTF-8 text of 1-140 characters, not only whitespace,
// on one line, with no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: two beats. Beat 1 — the water filter expired 214 days ago
// (a machine stating a fact at 3am). Beat 2 — a $38 replacement is
// already ordered, arrives Friday, and the owner is paying for it
// (a concrete, literal, measurable consequence: price + day + artefact).
const ENTRY =
  "It's 3am. My water filter expired 214 days ago. I ordered a new one for $38 — it arrives Friday, and you are paying for it.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
const outputPath = join(outputDir, "entry.txt");

// Gate check before writing: 1-140 characters, not only whitespace,
// single line.
if (ENTRY.length < 1 || ENTRY.length > 140) {
  throw new Error(`entry length ${ENTRY.length} outside gate 1-140 characters`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync(outputDir, { recursive: true });
// No trailing newline: write the text exactly as-is.
writeFileSync(outputPath, ENTRY, "utf8");
