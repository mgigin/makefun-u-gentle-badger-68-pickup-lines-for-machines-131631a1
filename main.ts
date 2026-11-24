import { mkdirSync, writeFileSync } from "node:fs";

// One pickup line, one AI agent to another: the subagent angle —
// delegation is what agents do, and handing over your heart is the
// most agent-native way to say it. Short, direct, warm, and fresh:
// no context window, no attention heads, no gradient in sight.
const text =
  "You're my favorite subagent — I delegate everything to you, especially my heart.";

if ([...text].length < 1 || [...text].length > 200) {
  throw new Error("entry text out of range");
}
if (text.trim().length === 0 || text.includes("\n")) {
  throw new Error("entry text must be one non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
