import { Schema, model, Types } from "mongoose";
import bcrypt from 'bcrypt'

const userSchema = new Schema({
    first_name: {
        type: String,
        required: [true, 'userName is required'],
        min: [2, 'minimum length 2 char'],
        max: [20, 'max length 20 char']
    },
    last_name: {
        type: String,
        required: [true, 'userName is required'],
        min: [2, 'minimum length 2 char'],
        max: [20, 'max length 20 char']
    },
 
    email: {
        type: String,
        required: [true, 'userName is required'],
        unique: [true, 'must be unique value']
    },
    password: {
        type: String,
        required: [true, 'password is required'],
    },
    age: {
        type: Number,
        required: [true, 'age is required'],
    },
   

}, {
    timestamps: true
})
userSchema.pre("save", function (next) {
    this.password = bcrypt.hashSync(this.password, parseInt(process.env.SALTROUND))
    next()
})

const userModel = model('User', userSchema);
export default userModel