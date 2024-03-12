<h2>Install Tools</h2>

<p><b>NodeJS:</b> https://nodejs.org/en </p>

<p><b>Code Editor:</b> VS Code</p>

<p><b>Request Track:</b> Postman</p>

<h2>Set up MERN Project</h2>

- Open project explorer on VS Code.
- Run Terminal.

<h2>Backend Set up</h2>

- Create folder "backend": `touch backend`.
- Execute `cd backend` and `npm init`, then press Enter until the end.
- Install packages: `npm i express mongoose dotenv bcryptjs jsonwebtoken nodemon nodemailer`.

<h3>Note:</h3>

| Package        | Description                                                                                             |
| -------------- | ------------------------------------------------------------------------------------------------------- |
| Mongoose       | a JavaScript object-oriented programming library that creates a connection between MongoDB and Node.js. |
| Nodemon        | automatically restarts the node application when file changes in the directory are detected.            |
| JSON Web Token | JWT is a way for creating data with optional signature and/or optional encryption.                      |
| Bcryptjs       | a library to help you hash passwords                                                                    |

<h2>Frontend Set up</h2>

- Create folder "frontend": `touch frontend`.
- Execute `cd frontend` and `npm create vite@latest`.
- Project name: `.`, then press Enter.
- Select a framework: `React`.
- Select a variant: `JavaScript`.
- Run `npm i react-router-dom`.
- Install Bootstrap package: `npm install react-bootstrap bootstrap`.

<h2>Deployment</h2>

- Rename the frontend folder to "client".
- Move the whole folder "client" to the folder "backend".
- Then, move all files from the "backend" to the external.
- Delete the empty folder "backend".

<h3>Modify "server.js" with context recognition for absolute links</h3>

```
import express from "express";
import mongoose from "mongoose";
import { postsRoutes } from "./routes/postsRoutes.js";
import { usersRoutes } from "./routes/usersRoutes.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());

app.use("/api/posts", postsRoutes);
app.use("/api/users", usersRoutes);

app.use(express.static(path.join(__dirname, "/client/dist")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/client/dist/index.html"))
);
mongoose
  .connect(process.env.DB_URI, { dbName: "demo_db" })
  .then(() => {
    console.log("Successfully connect to DB");
    app.listen(4000, () => console.log("Listening at 4000"));
  })
  .catch((err) => console.log(err));
```

<h3>Add building script to package.json</h3>

```
"build": "npm install --prefix ./client && npm run build --prefix ./client && npm install"
```

To prepare for deployment, delete these files/folders which will be automatically install by the script above to reduce size (optional):

- folder "dist".
- folder "node modules".
- package-lock.json.

You can fill the environment variables which are taken from the ".env" file.
