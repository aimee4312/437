import jwt from "jsonwebtoken";
import credentials from "./services/credential";
import dotenv from 'dotenv';

dotenv.config();
function generateAccessToken(username: string): Promise<string> {
  console.log("Generating token for", username);
  return new Promise((resolve, reject) => {
    jwt.sign(
      { username: username },
      process.env.TOKEN_SECRET as string,
      { expiresIn: "1d" },
      (error, token) => {
        if (error) reject(error);
        else resolve(token as string);
      }
    );
  });
}

export function registerUser(req: any, res: any): void {
  const { username, pwd } = req.body;

  if (!username || !pwd) {
    res.status(400).send("Bad request: Invalid input data.");
    return;
  }

  credentials
    .create(username, pwd)
    .then((creds) => generateAccessToken(creds.username))
    .then((token) => {
      res.status(201).send({ token });
    })
    .catch((error) => {
      console.error("Error registering user:", error);
      res.status(500).send("Internal Server Error");
    });
}

export function loginUser(req: any, res: any): void {
  const { username, pwd } = req.body;

  if (!username || !pwd) {
    res.status(400).send("Bad request: Invalid input data.");
    return;
  }

  credentials
    .verify(username, pwd)
    .then((goodUser: string | String) => generateAccessToken(goodUser as string))
    .then((token) => res.status(200).send({ token }))
    .catch((error) => {
      console.error("Error logging in:", error);
      res.status(401).send("Unauthorized");
    });
}

export function authenticateUser(req: any, res: any, next: any) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    res.status(401).end();
  } else {
    jwt.verify(
      token,
      process.env.TOKEN_SECRET as string,
      (decoded: any) => {
        if (decoded) {
          console.log("Decoded token", decoded);
          next();
        } else {
          res.status(401).end();
        }
      }
    );
  }
}