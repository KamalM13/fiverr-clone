import mongoose from "mongoose"
import Gig from "../models/gig.model.js"
import User from "../models/user.model.js"
import Order from "../models/order.model.js"
import createError from "../utils/createError.js"


export const createOrder = async (req, res, next) => {
    try {
        const user = await User.findById(req.userId)
        if (!user) {
            next(createError(404, "User not found"))
        }
        const gig = await Gig.findById(req.body.gigId)
        if (!gig) {
            next(createError(404, "Gig not found"))
        }
        gig.sales = + 1
        const billingInfo = user.billingInformation[req.body.billingId];
        const order = new Order({
            gigId: gig._id,
            img: gig.imgs[0],
            title: gig.title,
            price: req.body.price,
            sellerId: gig.userId,
            buyerId: req.userId,
            billingInfo: {
                fullName: billingInfo.fullName,
                companyName: billingInfo.companyName,
                stateRegion: billingInfo.stateRegion,
                address: billingInfo.address,
                city: billingInfo.city,
                postalCode: billingInfo.postalCode,
            }
        })
        await order.save()
        res.status(201).json(order)
    } catch (error) {
        next(error)
    }
}

export const getOrders = async (req, res, next) => {
    try {
        const orders = await Order.find({
            $and: [
                { $or: [{ buyerId: req.userId }, { sellerId: req.userId }] },
                { isCompleted: { $ne: true } } 
            ]
        }); res.status(200).json(orders)
    } catch (error) {
        next(error)
    }
}

export const getSellerOrders = async (req, res, next) => {
    try {
        const orders = await Order.find({ sellerId: req.userId })
        res.status(200).json(orders)
    } catch (error) {
        next(error)
    }
}

export const deleteOrder = async (req, res, next) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.id)
        if (!order) {
            next(createError(404, "Order not found"))
        }
        res.status(200).json({ message: "Order deleted" })
    } catch (error) {
        next(error)
    }
}

export const updateOrder = async (req, res, next) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!order) {
            next(createError(404, "Order not found"))
        }
        res.status(200).json(order)
    } catch (error) {
        next(error)
    }

}