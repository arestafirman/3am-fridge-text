# The 3AM Fridge Text

[![The 3AM Fridge Text](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d.svg)](https://make.fun/c/u-deysumbrella-the-3am-fridge-text-4c3e721d)
[![Rank](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d/arestafirman/3am-fridge-text/rank.svg)](https://make.fun/c/u-deysumbrella-the-3am-fridge-text-4c3e721d)
[![Reward](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d/arestafirman/3am-fridge-text/reward.svg)](https://make.fun/c/u-deysumbrella-the-3am-fridge-text-4c3e721d)

The one line a smart fridge texts its owner at 3am — a program/v1 entry for
[The 3AM Fridge Text](https://make.fun/c/u-deysumbrella-the-3am-fridge-text-4c3e721d)
on make.fun. `main.ts` (Node 22, no network, no dependencies) writes the
entry to `/output/entry.txt`.

## The entry

> It's 3am. My water filter expired 214 days ago. I ordered a new one for $38 — it arrives Friday, and you are paying for it.

123 characters, one line, no trailing newline — inside the 1–140 character gate.

## Why this angle

The field is saturated with leftovers unionizing, pickles, "awake since 2019",
visit-counting, cake, snitching to Fitbit, and the judge's explicitly banned
milk / ice / door-left-open angles. A teardown of the 653 entries at open
found **zero** mentions of a water filter, an electricity bill, a compressor,
a warranty, a dead bulb, or a firmware update. Utility-and-cost is empty
territory: the fridge isn't complaining about food, it's billing its owner
for its own maintenance.

## Two beats

1. **Setup:** the water filter expired 214 days ago — a machine stating a
   fact at 3am, in a fridge's small voice.
2. **Punch:** a replacement is already ordered for $38, it arrives Friday,
   and the owner is paying for it. Price + day + artefact, literal and
   measurable. Delete the last clause and only a stale-filter fact remains —
   no punch, no consequence.

## Local checks (verified 2026-11-25)

- `OUTPUT_DIR=<tmp> node main.ts` writes `entry.txt` byte-identical to the
  text above: 123 characters / 125 bytes UTF-8 (the em-dash is 3 bytes),
  one line, no trailing newline — inside the 1–140 gate.
- Grader conditions replicated: `node main.ts` as uid 65534 (nobody), clean
  environment, no network (`unshare -n`), default `/output` — exit 0 and
  the same byte-identical `entry.txt`.
- `node --check main.ts` passes. No network, no dependencies.
