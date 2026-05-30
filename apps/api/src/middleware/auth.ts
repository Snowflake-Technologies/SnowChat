import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import { env } from "../config/env";

export interface AuthRequest
  extends Request {

  user?: {
    id: string;
    email: string;
  };
}

export function authenticate(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {

  const authHeader =
    req.headers.authorization;

  if (!authHeader) {

    return res.status(401).json({
      success: false,
      message: "No token provided"
    });

  }

  const token =
    authHeader.replace(
      "Bearer ",
      ""
    );

  try {

    const decoded =
      jwt.verify(
        token,
        env.JWT_SECRET
      ) as any;

    req.user = decoded;

    next();

  } catch {

    return res.status(401).json({
      success: false,
      message: "Invalid token"
    });

  }
}
