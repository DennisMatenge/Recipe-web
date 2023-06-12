import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/Users.js";
import { recipesRouter } from "./routes/recipes.js";

const PORT = process.env.PORT || 6000

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.connect("mongodb+srv://Dennison:XEuIlgonfVfAieF4@recipes.0ulzdxt.mongodb.net/recipes?retryWrites=true&w=majority")
.then (()=>console.log("BD connected Successfully"))
.catch((error)=> console.log(error));

app.listen(PORT, () => console.log("SERVER STARTED!!!"));