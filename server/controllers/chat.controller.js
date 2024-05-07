import createError from "../utils/createError.js"
import Message from "../models/message.model.js"
import Chat from "../models/chat.model.js"

export const getChats = async (req, res, next) => {
    try {
        const chats = await Chat.find({ $or: [{ sellerId: req.userId }, { buyerId: req.userId }] });
        if (!chats) next(createError(404, "Chats not found"));
        res.status(200).json(chats);

    } catch (error) {
        next(createError(404, error.message))
    }
}

export const createChat = async (req, res, next) => {
    try {
        const chat = await Chat.find({ $and: [{ sellerId: req.body.sellerId } , {buyerId: req.userId }] })
        if (chat.length > 0) {
            throw new Error("Chat already exists")
        }
        const newChat = new Chat({
            id: req.body.id,
            sellerId: req.body.sellerId,
            buyerId: req.userId,
            lastMessage: req.body.lastMessage
        });
        const savedChat = await newChat.save();
        res.status(201).json(savedChat);
    } catch (error) {
        next(createError(400, error.message))
    }
}

export const createMessage = async (req, res, next) => { 
    try {
        const newMessage = new Message({
            chatId: req.body.chatId,
            userId: req.userId,
            message: req.body.message
        });
        const savedMessage = await newMessage.save();
        await Chat.findOneAndUpdate({ id: req.body.chatId }, {
            $set: {
                lastMessage: req.body.message,
                readBySeller: req.userId === req.body.sellerId ? true : false,
                readByBuyer: req.userId === req.body.buyerId ? true : false
            }
        }, { new: true });
        res.status(201).json(savedMessage);
    } catch (error) {
        next(createError(400, error.message))
    }
}

export const getMessage = async (req, res, next) => { 
    try {
        const message = await Message.find({ chatId: req.params.id });
        if (!message) next(createError(404, "Message not found"));
        res.status(200).json(message);
    } catch (error) {
        next(createError(404, error.message))
    }
}