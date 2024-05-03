import User from "../models/user.model.js";
import createError from "../utils/createError.js";


export const deleteUser = async (req, res, next) => {

    const user = await User.findById(req.params.id);

    if (payload.id !== user._id.toString()) next(createError(403, "You can only delete your account"));

    await User.findByIdAndDelete(req.params.id);

    next();
}

export const getUsername = async (req, res, next) => {
    try {
        const user = await User.findById(req.userId);
        if (!user) next(createError(404, "User not found"));
        res.status(200).json(user.username);
    } catch (error) {
        next(createError(404, "User not found"));
    }
}
export const getUserId = async (req, res, next) => {
    try {
        if (!req.userId) next(createError(404, "User not found"));
        res.status(200).json(req.userId);
    } catch (error) {
        next(createError(404, "User not found"));
    }
}

export const getGigUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) next(createError(404, "User not found"));
        res.status(200).json(user.username);
    } catch (error) {
        next(createError(404, "User not found"));
    }
}

export const getImage = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) next(createError(404, "User not found"));
        res.status(200).json(user.imgURL);
    } catch (error) {
        next(createError(404, "User not found"));
    }
}

export const getCountry = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) next(createError(404, "User not found"));
        res.status(200).json(user.country);
    } catch (error) {
        next(createError(404, "User not found"));
    }
}