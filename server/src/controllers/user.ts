import { Request, Response, NextFunction } from "express";
import { User } from "../models/User";
import bcryptjs from "bcryptjs";
import { generateToken } from "../utils/generateToken";

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const people = await User.find(); //method for get all data
    return res.status(200).json(people);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

const register = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  try {
    const person = await User.findOne({
      email,
    }); //see if user exists

    if (person) throw "user already exists";

    const hash = bcryptjs.hashSync(password, 8);

    await User.create({
      email,
      password: hash,
    }); //creating data

    return res.status(201).json({ message: "Person added!" }); //everything it's working (for now)
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const person = await User.findOne({ email }); //find user

    if (!person) throw "email of user is not correct";

    const isMatch = bcryptjs.compareSync(password, person.password);

    if (!isMatch) throw "password of user is not correct";

    const token = generateToken({ sub: person._id, email: person.email });

    return res.status(201).send({ person, token }); //everything it's working (for now)
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

export { getAllUsers, register, login };
