// The One-Line Laugh
// Angle: my phone's autocorrect keeps renaming my boss "Bestie" in work
// emails — a small, specific, everyday humiliation everyone with a phone
// recognises. The joke's turn is at the very end: instead of fighting the
// autocorrect, the narrator gives in and starts calling the boss "Bestie"
// too. The machine's mistake becomes the human's habit — the error wins.
// Fresh vs the field: no airplane food, no therapist, no Wi-Fi password;
// a named, concrete error ("Bestie") with a human surrender as the
// punchline. At 102 characters it is also short, which the tie-break
// rewards: smaller text wins ties, so every word here earns its place.
import { mkdirSync, writeFileSync } from "node:fs";

const line = "My phone autocorrects my boss's name to 'Bestie' in every email, and honestly, at this point, so do I.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`Wrote ${line.length} characters to /output/entry.txt`);
