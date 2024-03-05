import express, { Request, Response } from "express";
import * as path from "path";
import { PathLike } from "node:fs";
import fs from "node:fs/promises";
import { connect } from "./mongoConnect";
import apiRouter from "./routes/api";

connect("chromawave");
const app = express();
const port = process.env.PORT || 3000;

const frontend = "lit-frontend";
let cwd = process.cwd();
let dist: PathLike | undefined;
let indexHtml: PathLike | undefined;

try {
  indexHtml = require.resolve(frontend);
  dist = path.dirname(indexHtml.toString());
} catch (error: any) {
  console.log(`Could not resolve ${frontend}:`, error.code);
  dist = path.resolve(cwd, "..", frontend, "dist");
  indexHtml = path.resolve(dist, "index.html");
}

console.log(`Serving ${frontend} from`, dist);

if (dist) app.use(express.static(dist.toString()));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.use("/app", (req, res) => {
  if (!indexHtml) {
    res
      .status(404)
      .send(
        `Not found; ${frontend} not available, running in ${cwd}`
      );
  } else {
    fs.readFile(indexHtml, { encoding: "utf8" }).then((html) =>
      res.send(html)
    );
  }
});
// login
// app.post("/login", loginUser);
// app.post("/signup", registerUser);

app.use("/api", apiRouter);
