import userModel from "../../../../db/model/user.model.js";
import { asyncHandler } from "../../../services/asyncHandler.js"
import { findById, findByIdAndDelete, findOneAndUpdate, findOne, find, findByIdAndUpdate, create, findOneAndDelete } from '../../../../db/DBmethods.js';
import bcrypt from 'bcrypt'
export const signUp = asyncHandler(async (req, res, next) => {
  const { first_name, last_name, email, password, age } = req.body;
  const user = await findOne({ model: userModel, condition: { email } })
  if (user) {
    res.status(409).json({ message: 'this email already register' })
  } else {
    let addUser = new userModel(req.body);
    let savedUser = await addUser.save()
    res.status(201).json({ message: "added successfully", savedUser })
  }
})
export const signIn = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await findOne({ model: userModel, condition: { email } })
  if (!user) {
    res.status(404).json({ message: 'You have to register first' })
  } else {
    let compare = bcrypt.compareSync(password, user.password, parseInt(process.env.SALTROUND))
    if (compare) {
      res.status(200).json({ message: "welcome", id: user._id })
    } else {
      res.status(400).json({ message: 'In-valid password' })
    }
  }
})

