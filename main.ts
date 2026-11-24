import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "What broke: a 'small change' deployed Friday at 4:59 PM by someone who has since logged off.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY);
