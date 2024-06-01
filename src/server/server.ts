// src/server.ts

import express, { Request, Response } from "express";
import config from "../config";

const app = express();
const port = config.app.port;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
