import Gig from "../models/gig.model.js"
import User from "../models/user.model.js"
import createError from "../utils/createError.js"

export const createGig = async (req, res, next) => { 
    if (!req.isSeller) next(createError(403, "You must be a seller to create a gig"))

    const gig = new Gig({
        userId : req.userId,
        ...req.body,
    });
    try {
        const savedGig = await gig.save()
        res.status(201).send(savedGig)
    } catch (error) {
    next(error)
    }
}

export const deleteGig = async (req, res, next) => { 
    try {
        const gig = await Gig.findById(req.params.id)
        if (!gig) next(createError(404, "Gig not found"))
        if (!req.isSeller) next(createError(403, "You must be a seller to delete a gig"))
        if (gig.userId !== req.userId) next(createError(403, "You can only delete your own gigs"))
        await Gig.findByIdAndDelete(req.params.id)
        res.status(200).send("Gig deleted successfully")
    } catch (error) {
        next(error)
    }
}



export const getGigs = async (req, res, next) => {
    const query = req.query
    try {
        const gigs = await Gig.find({
            ...(query.category && {category: query.category}),
            ...(query.search && {title: { $regex: query.search, $options: "i" }}),
            ...((query.min || query.max) && {price: { $gte: query.min || 0, $lte: query.max}})
        })
        res.status(200).send(gigs)
    } catch (error) { 
        next(error)
    }
    
}

export const getGig = async (req, res, next) => {
    try {
        const gig = await Gig.findById(req.params.id)
        if (!gig) return res.status(404).send("Gig not found"); // Return early if gig is not found
        res.status(200).send(gig)
    } catch (error) {
        next(error)
    }
}

export const addGigComment = async (req, res, next) => {
    try {
        const gig = await Gig.findById(req.params.id)
        const user = await User.findById(req.userId)
        const username = user.username
        if (!gig) return res.status(404).send("Gig not found"); // Return early if gig is not found
        gig.comments.push({
            userId: req.userId,
            username,
            text: req.body.comment
        })
        await gig.save()
        res.status(201).json(gig.comments)
    } catch (error) {
        next(error)
    }
}

