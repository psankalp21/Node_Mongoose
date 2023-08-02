"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signup = void 0;
const signup_1 = require("../services/signup");
async function signup(req, res) {
    try {
        const { name, email, password, dob, phone, display_pic, about } = req.body;
        const user = await (0, signup_1.signup_service)(name, email, password, dob, phone, display_pic, about);
        res.status(201).json({
            message: 'Signup successful',
            user
        });
    }
    catch (error) {
        console.log(error);
        res.send("Unable to signup due to some error!");
    }
}
exports.signup = signup;
//# sourceMappingURL=signup.js.map