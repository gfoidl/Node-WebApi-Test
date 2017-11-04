import { Start } from "./start";
//-----------------------------------------------------------------------------
if (!process.env.MONGO_USER || !process.env.MONGO_PASSWORD) {
	console.error("Environment variables for MONGO_USER and MONGO_PASSWORD must be set!");
	process.exit(1);
}

Start()
	.catch(err => {
		console.error(`Error starting server: ${err.message}`);
		process.exit(1);
	});