import { Request, Response } from "express";
import usersService from "../services/userService";
import { StatusCodes } from "http-status-codes";

const service = new UserService();

/**
 * Get All Users
 * @param req request
 * @param res response
 */
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await service.getAllUsers();
    res.status(StatusCodes.OK).json(users);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

/**
 * Create User
 * @param req request
 * @param res response
 */
export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await service.createUser(req.body);
    res.status(StatusCodes.CREATED).json(user);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

/**
 * Get Single User
 * @param req request
 * @param res response
 */
export const getSingleUser = async (req: Request, res: Response) => {
  try {
    const user = await service.getSingleUser(req.params.id);
    res.status(StatusCodes.OK).json(user);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

/**
 * Update User
 * @param req request
 * @param res response
 */
export const updateUser = async (req: Request, res: Response) => {
  try {
    const updatedUser = await service.updateUser(req.params.id, req.body);
    res.status(StatusCodes.OK).json(updatedUser);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

/**
 * Delete User
 * @param req request
 * @param res response
 */
export const deleteUser = async (req: Request, res: Response) => {
  try {
    await service.deleteUser(req.params.id);
    res.status(StatusCodes.NO_CONTENT).send();
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};