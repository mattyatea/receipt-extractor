const Logger = (moduleName?: string) => {
	const prefix = moduleName ? `[${moduleName}] ` : "";
	const error = (message: string) => {
		console.error(`${prefix}[ERROR] ${new Date().toISOString()} - ${message}`);
	};
	const info = (message: string) => {
		console.log(`${prefix}[INFO] ${new Date().toISOString()} - ${message}`);
	};
	const debug = (message: string) => {
		console.debug(`${prefix}[DEBUG] ${new Date().toISOString()} - ${message}`);
	};

	return {
		error,
		info,
		debug,
	};
};

export { Logger };
