import {Express, Request, Response} from "express";
import express from "express";
import * as path from "path";
import cors from 'cors'
import apiRouter from './api/api.router';

import Logger from 'bunyan-logger';
import expressLogger from 'express-bunyan-logger';


export class Server {

    private server: Express;
    private basePath = '/v1';

    constructor(app: Express) {
        this.server = app;

        this.server.use(express.static(path.resolve("./") + "/build/frontend"));
        this.server.use(cors())

        this.server.use(`${this.basePath}`, apiRouter);

        this.server.get("/", (req: Request, res: Response): void => {
            res.sendFile(path.resolve("./") + "/build/frontend/index.html");
        });

        this.server.use(expressLogger({
            logger: new Logger({ stream: 'debug' })
        }));
    }

    public start(port: number): void {
        this.server.listen(port, () => console.log(`Server listening on port ${port}!`));
    }

}

