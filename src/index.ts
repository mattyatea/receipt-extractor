import { suicaModule } from "@modules/suica";
import type { ProcessMode } from "@/types";

const args = process.argv.slice(2);
const mode = (args[0] as ProcessMode) || "both";

const validModes: ProcessMode[] = ["history", "charge", "both"];
if (args[0] && !validModes.includes(mode)) {
	console.error(
		`Invalid mode: ${args[0]}. Valid modes are: ${validModes.join(", ")}`,
	);
	process.exit(1);
}

suicaModule(mode)
	.then((success) => {
		process.exit(success ? 0 : 1);
	})
	.catch((error) => {
		console.error("Unexpected error:", error);
		process.exit(1);
	});
