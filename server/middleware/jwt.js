import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

export const verfiyToken = (req, res, next) => { 
    
    const token = req.cookies.accessToken;

    if (!token) return next(createError(401, "Unauthorized"));

    jwt.verify(token, process.env.SECRET_KEY, (err, payload) => {
        if (err) return next(createError(403, "Invalid Token"));

        req.userId = payload.id;
        req.isSeller = payload.isSeller;

        next();
    });
}