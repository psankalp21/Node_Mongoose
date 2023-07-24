"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login_service = void 0;
const user_1 = __importDefault(require("../database/models/user"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jwt_1 = require("../middlewares/jwt");
const reddis_1 = require("../database/reddis");
async function login_service(email, password) {
    try {
        const user = await user_1.default.findOne({ email });
        if (!user) {
            throw new Error('User not found');
        }
        const isPasswordValid = await bcrypt_1.default.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Invalid password');
        }
        const token = (0, jwt_1.generateToken)({ userId: user._id });
        (0, reddis_1.redisConnect)(user._id, token);
        return { token, user };
    }
    catch (error) {
        console.log(error);
        throw new Error('Login failed');
    }
}
exports.login_service = login_service;
//# sourceMappingURL=login.js.map