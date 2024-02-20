import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Request, Response, Application } from "express";
import User from "../models/userModel";
import * as httpStatus from "http-status";

const secret = process.env.SECRET_KEY || "secret-key";

export const register = async (req: Request, res: Response) => {
  try {
    const userExists = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (userExists) {
      res.status(httpStatus.CONFLICT).send({
        success: false,
        message: "Email already taken",
      });
      return;
    }

    const hash = bcrypt.hashSync(req.body.password, 8);

    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hash,
    });

    res.status(httpStatus.CREATED).send({
      success: true,
      message: "Account created",
    });
  } catch (error) {
    console.error(error);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!user) {
      res.status(httpStatus.NOT_FOUND).send({
        success: false,
        message: "User not found",
      });
      return;
    }

    const isValidPassword = bcrypt.compareSync(req.body.password, user.password);

    if (!isValidPassword) {
      res.status(httpStatus.BAD_REQUEST).send({
        success: false,
        message: "Invalid password",
      });
      return;
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      secret,
      {
        expiresIn: 86400, // expires in 24 hours
      }
    );

    res.status(httpStatus.OK).send({
      success: true,
      message: "Login successful",
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export default {
  register,
  login,
};