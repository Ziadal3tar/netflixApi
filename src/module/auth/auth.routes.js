import { Router } from "express";

// import { validation } from "../../middleware/validation.js";

// import { logInValidation, signUpValidation, updateRoleValidation } from "./auth.validation.js";
import * as registerControl from './controller/registration.js'
const router = Router()
router.get("/", (req, res) => {
    res.status(200).json({ message: 'Auth Module' })
})
router.post('/signUp',registerControl.signUp)
router.post('/signIn',registerControl.signIn)
export default router