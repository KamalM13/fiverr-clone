import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../models/user.model.js';
import createError from '../utils/createError.js';

export const register = async (req, res, next) => {

    try {
        const hash = await bcrypt.hashSync(req.body.password, 10);
        const user = await User.findOne({ username: req.body.username });
        if (user) return next(createError(401, "Username already exists"));
        const email = await User.findOne({ email: req.body.email });
        if (email) return next(createError(401, "Email already exists"));

        const newUser = new User({
            ...req.body,
            password: hash,
        })
        
        await newUser.save();
        res.status(201).send(newUser);
    } catch (err) {
        console.log(err);
        next(err)
    }
}
export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) next(createError(404, "User not found"));

        const validPassword = await bcrypt.compareSync(req.body.password, user.password);
        if (!validPassword) next(createError(400, "Invalid credentials"));

        const token = jwt.sign({
            id: user._id,
            isSeller: user.isSeller,
        }, process.env.SECRET_KEY, { expiresIn: "3h" });

        const { password, ...info } = user._doc;
        res.cookie("accessToken", token, {
            httpOnly: true,
        }).status(200).json(info);

    } catch (error) {
        next(error);
    }
}
export const logout = async (req, res) => {

    if (!req.cookies.accessToken) return res.status(400).send("You are not logged in");
    
    res.clearCookie("accessToken", {
        sameSite: "none",
        secure: true,
    }).status(200).send("Logged out");
}