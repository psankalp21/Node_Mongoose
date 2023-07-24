"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login_service = void 0;
const user_1 = __importDefault(require("../database/models/user"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jwt_1 = require("../middlewares/jwt");
const redis_1 = require("redis");
async function login_service(email, password) {
    try {
        const client = (0, redis_1.createClient)();
        client.connect();
        const user = await user_1.default.findOne({ email });
        if (!user) {
            throw new Error('User not found');
        }
        const isPasswordValid = await bcrypt_1.default.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Invalid password');
        }
        let session_payload = {
            user_id: user._id,
            device_id: "2201",
            IP_address: "192.168.0.220",
            isSessionSctive: true
        };
        const token = (0, jwt_1.generateToken)({ userId: user._id });
        await client.set(`${user._id}_session`, JSON.stringify(session_payload));
        return { token, user };
    }
    catch (error) {
        console.log(error);
        throw new Error('Login failed');
    }
}
exports.login_service = login_service;
//# sourceMappingURL=login.js.map