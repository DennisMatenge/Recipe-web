import expess from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/Users.js";

const router = expess.Router();

router.post("/register", async (req, res)=>{
    const { username, password } = req.body;
    const user = await UserModel.findOne({username});
    if (user) {
        return res.json({msg: "User already exists"});
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = new UserModel({username, password: hashedPassword});
    await newUser.save();
    res.json({msg: "User Registered Succesfully"});
});


router.post("/login", async (req, res)=>{
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });

    if(!user) {
        return res.json({ msg: "User Doesn't Exist"});
    }

    const isPasswwordValid = await bcrypt.compare(password, user.password);
    if (!isPasswwordValid) {
        return res.json({msg: "Username or Password is Incorrect!"});
    }

    const token = jwt.sign({ id: user._id }, "secret");
    res.json({ token, userID: user._id});
});


export { router as userRouter};