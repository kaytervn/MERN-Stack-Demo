import expess from "express";
import mongoose from "mongoose";
import { postsRoutes } from "./routes/postsRoutes.js";
import { usersRoutes } from "./routes/usersRoutes.js";

const app = expess();

app.use(expess.json());

app.use("/api/posts", postsRoutes);
app.use("/api/users", usersRoutes);

mongoose
  .connect("mongodb://localhost:27017", { dbName: "demo_db" })
  .then(() => {
    console.log("Successfully connect to DB");
    app.listen(4000, "localhost", () => console.log("Listening at 4000"));
  })
  .catch((err) => console.log(err));
