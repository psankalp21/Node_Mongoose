"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signup_service = void 0;
const user_1 = __importDefault(require("../database/models/user"));
const bcrypt_1 = __importDefault(require("bcrypt"));
async function signup_service(name, email, password, dob, phone, display_pic, about) {
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt_1.default.hash(password, saltRounds);
        const newUser = await user_1.default.create({
            email: email,
            password: hashedPassword,
            name: name,
            dob: dob,
            phone: phone,
            display_pic: display_pic,
            about: about
        });
    }
    catch (error) {
        console.log(error);
        throw new Error('An error occurred during signup');
    }
}
exports.signup_service = signup_service;
//# sourceMappingURL=signup.js.map