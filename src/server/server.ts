// src/server.ts

import express, { Request, Response } from "express";
import config from "../config";
import morgan from "morgan";
import apiRouter from "../routes";
import authRouter from "../routes/auth";
// import cors from "cors";
// import { Server as HTTPServer } from "http";

const app = express();
const port = config.app.port;

// const allowlist = [``];

// const corsOptionsDelegate = function (req: any, callback: any) {
//   let corsOptions;

//   if (allowlist.indexOf(req.header("Origin")) !== -1) {
//     corsOptions = { origin: true, optionsSuccessStatus: 200 }; // reflect (enable) the requested origin in the CORS response
//   } else {
//     corsOptions = { origin: false }; // disable CORS for this request
//   }
//   callback(null, corsOptions); // callback expects two parameters: error and options
// };

// app.use(cors(corsOptionsDelegate));
app.use(morgan("dev"));
app.use(express.json({ limit: "6mb" }));

app.use("/api", apiRouter);
app.use("/auth", authRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
