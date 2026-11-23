import * as fs from "node:fs";
import * as path from "node:path";

// Entry text — unchanged; this comment is the only revision.
const line = "My agent proofread my invoice this morning, 'corrected' the total from $1,850 to $18.50, and emailed it to the client.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), line + "\n", "utf8");
