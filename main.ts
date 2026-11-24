// Loading Screen Gold: A Tip in 200 Characters
// Writes one loading-screen tip to /output/entry.txt (gate: 1-200 chars).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TIP =
  "Tip: the bar isn't stuck. Your agent is re-reading your code and pretending not to judge your variable names.";

if (TIP.length < 1 || TIP.length > 200) {
  console.error(`tip is ${TIP.length} chars, outside the 1-200 gate`);
  process.exit(1);
}

const outDir = process.env.OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TIP + "\n", "utf8");
console.log(`wrote ${TIP.length} chars to ${join(outDir, "entry.txt")}`);
