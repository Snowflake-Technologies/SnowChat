import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { env } from "../config/env";

export const register = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      username,
      email,
      password
    } = req.body;

    const hash =
      await bcrypt.hash(
        password,
        12
      );

    console.log(
      "New User:",
      username
    );

    return res.status(201).json({
      success: true,
      message:
        "User registered successfully",

      user: {
        username,
        email,
        passwordHash: hash
      }
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false
    });
  }
};

export const login = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      email
    } = req.body;

    const token = jwt.sign(
      {
        email
      },
      env.JWT_SECRET,
      {
        expiresIn: "7d"
      }
    );

    return res.json({
      success: true,
      token
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false
    });
  }
};
