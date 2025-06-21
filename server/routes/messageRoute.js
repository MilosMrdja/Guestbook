import express from "express";
import {
  getAllMessages,
  getOneMessage,
  postMessage,
} from "../controllers/messageController.js";

import {
  validateCreateMessage,
  validateMessageId,
} from "../validations/messageValidation.js";

const router = express.Router();

router.route("/").get(getAllMessages).post(validateCreateMessage, postMessage);
router.route("/:id").get(validateMessageId, getOneMessage);

export default router;
