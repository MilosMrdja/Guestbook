import * as Message from "../models/messageModel.js";
import AppError from "../utils/appError.js";
import catchAsync from "../utils/catchAsync.js";
import { validationResult } from "express-validator";

export const getAllMessages = catchAsync(async (req, res, next) => {
  const page = parseInt(req.query.page) || 1; // default 1
  const limit = parseInt(req.query.limit) || 3; // default 10
  const offset = (page - 1) * limit;

  const messages = await Message.getMessages(limit, offset);
  const total = await Message.getMessagesCount();
  const totalPages = Math.ceil(total / limit);
  res.status(200).json({
    status: "success",
    results: messages.length,
    page,
    limit,
    total,
    totalPages,
    data: {
      data: messages,
    },
  });
});

export const getOneMessage = catchAsync(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new AppError(errors.array()[0].msg, 400));
  }
  const id = req.params.id;
  const message = await Message.getMessage(id);
  if (!message) {
    return next(new AppError("Message not found", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      data: message,
    },
  });
});

export const postMessage = catchAsync(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new AppError(errors.array()[0].msg, 400));
  }

  const { userName, content } = req.body;
  const newMessage = await Message.createMessage(userName, content);
  res.status(201).json({
    status: "success",
    data: {
      data: newMessage,
    },
  });
});
