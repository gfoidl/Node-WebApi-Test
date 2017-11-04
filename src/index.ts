import "reflect-metadata";
import { Start } from "./start";
//-----------------------------------------------------------------------------
Start()
    .catch(err => {
        console.error(`Error starting server: ${err.message}`);
        process.exit(1);
    });