import { ApiServer } from "./api-server";
//-----------------------------------------------------------------------------
export const Start = (): Promise<void> => {
	return new Promise<void>((resolve, reject) => {
		const apiServer = new ApiServer();
		apiServer
			.Start()
			.then(resolve)
			.catch(reject);

		const graceFul = () => {
			apiServer.Stop().then(() => process.exit(0));
		}

		process.on("SIGTERM", graceFul);
		process.on("SIGINT" , graceFul);
	});
};