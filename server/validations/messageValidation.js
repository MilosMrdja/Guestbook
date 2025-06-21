import { body, param } from "express-validator";

// Request body validation to send message to the server
export const validateCreateMessage = [
  body("userName")
    .notEmpty()
    .withMessage("Message must contains username")
    .isLength({ min: 2 })
    .withMessage("Username must contains minimum 2 characters!")
    .matches(/[a-zA-Z]/)
    .withMessage("Username must contain at least one letter.")
    .escape(),

  body("content")
    .notEmpty()
    .withMessage("Message must contains content")
    .isLength({ min: 2 })
    .withMessage("Message must contains minimum 2 characters!")
    .matches(/[a-zA-Z]/)
    .withMessage("Message must contain at least one letter.")
    .escape(),
];

export const validateMessageId = [
  param("id").isInt().withMessage("ID must be a number"),
];
