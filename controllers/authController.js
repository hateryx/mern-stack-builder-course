import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/index.js";
/* ----prototype version for POSTMAN testing purposes

const register = async (req, res) => {
  res.send("register user");
};

*/

//removed the try catch syntax after installing express async error npm package
const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    // <before CustomAPI Error> throw new Error("Please provide all values");
    throw new BadRequestError("Please provide all values");
  }

  const user = await User.create({ name, email, password });
  res.status(StatusCodes.CREATED).json({ user });
};

//technical debts
const login = async (req, res) => {
  res.send("login user");
};

const updateUser = async (req, res) => {
  res.send("update user");
};

export { register, login, updateUser };
