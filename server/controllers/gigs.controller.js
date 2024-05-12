import mongoose from "mongoose"
import Gig from "../models/gig.model.js"
import User from "../models/user.model.js"
import createError from "../utils/createError.js"


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
            ...(query.category && { category: query.category }),
            ...(query.search && { title: { $regex: query.search, $options: "i" } }),
            ...((query.min || query.max) && { price: { $gte: query.min || 0, $lte: query.max } })
        })
        res.status(200).send(gigs)
    } catch (error) {
        next(error)
    }

}

export const getGig = async (req, res, next) => {
    try {
        const gig = await Gig.findById(req.params.id)
        if (!gig) return res.status(404).send("Gig not found");
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
        if (!gig) return res.status(404).send("Gig not found");
        gig.comments.push({
            _id: new mongoose.Types.ObjectId(),
            gigId: req.params.id,
            userId: req.userId,
            username,
            rating: req.body.rating ? req.body.rating : 0,
            text: req.body.comment
        })
        gig.ratingNumber += 1
        gig.totalRating += req.body.rating
        await gig.save()
        res.status(201).json(gig.comments)
    } catch (error) {
        next(error)
    }
}

export const getGigRating = async (req, res, next) => {
    try {
        const gig = await Gig.findById(req.params.id)
        if (!gig) return res.status(404).send("Gig not found");
        res.status(200).send({ rating: (gig.totalRating / gig.ratingNumber).toFixed(1) })
    } catch (error) {
        next(error)
    }
}

export const deleteGigComment = async (req, res, next) => {
    try {
        const gig = await Gig.findById(req.params.id)
        if (!gig) return res.status(404).send("Gig not found");
        const comment = gig.comments.find(comment => comment._id == req.params.commentId)
        if (!comment) return res.status(404).send("Comment not found");
        if (comment.userId !== req.userId) return res.status(403).send("You can only delete your own comments")
        gig.comments = gig.comments.filter(comment => comment._id != req.params.commentId)
        gig.ratingNumber -= 1
        gig.totalRating -= comment.rating
        await gig.save()
        res.status(200).send("Comment deleted successfully")
    } catch (error) {
        next(error)
    }
}

export const updateGigComment = async (req, res, next) => {
    const { id, commentId } = req.params;
    const { text, rating } = req.body;

    try {
        const gig = await Gig.findById(id);
        const commentIndex = gig.comments.findIndex(comment => comment._id.toString() === commentId);
        if (commentIndex === -1) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        if (text) {
            gig.comments[commentIndex].text = text;
        }
        if (rating) {
            gig.comments[commentIndex].rating = rating;
        }
        gig.markModified(`comments.${commentIndex}`);
        await gig.save().then((res) => console.log(res));

        res.json({ message: 'Comment updated successfully', comment: gig.comments[commentIndex] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
}

export const createGig = async (req, res, next) => {
    try {
        const user = await User.findById(req.userId)
        if (!user) return res.status(404).send("User not found")
        if (!req.isSeller) return res.status(403).send("You must be a seller to create a gig")
        
        const gig = new Gig({
            about: req.body.about,
            category: req.body.category,
            delivery: req.body.delivery,
            features: req.body.features,
            imgs: req.body.imgs,
            plans: req.body.plans,
            price: 0,
            revisions: req.body.revisions,
            shortDesc: req.body.shortDesc,
            shortTitle: req.body.shortTitle,
            title: req.body.title,
            userId: req.userId,
        })
        await gig.save()
        res.status(201).send(gig)
            

    } catch (error) {
        next(error)
    }
}