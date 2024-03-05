import User from '../models/user.model.js';

export const register = async (req, res) => {

    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            country: req.body.country,
        })

        await newUser.save();
        res.status(201).send(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export const login = async (req, res) => { }
export const logout = async (req, res) => { }