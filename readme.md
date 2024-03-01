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
- Install packages: `npm i express mongoose dotenv bcryptjs jsonwebtoken nodemon`.

<h3>Note:</h3>

| Package        | Description                                                                                             |
| -------------- | ------------------------------------------------------------------------------------------------------- |
| Mongoose       | a JavaScript object-oriented programming library that creates a connection between MongoDB and Node.js. |
| Nodemon        | automatically restarts the node application when file changes in the directory are detected.            |
| JSON Web Token | JWT is a way for creating data with optional signature and/or optional encryption.                      |
| Bcryptjs       | a library to help you hash passwords                                                                    |

<h2>Frontend Set up</h2>

- Create folder "frontend": `touch frontend`.
- Execute `cd frontend` and `npm create vite@latest`, then press Enter.
- Select a framework: `React`.
- Select a variant: `JavaScript`.
- Run `npm i reat-router-dom`.
- Install Bootstrap package: `npm install react-bootstrap bootstrap`.
- Install Bootstrap Icons: `npm i bootstrap-icons`
