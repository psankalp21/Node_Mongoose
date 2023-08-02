"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.joi_follow = exports.joi_login = exports.joi_signup = void 0;
const joi_1 = __importDefault(require("joi"));
const signUpSchema = joi_1.default.object({
    username: joi_1.default.string().min(3).max(20).required(),
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().min(6).required(),
    name: joi_1.default.string().required(),
    bio: joi_1.default.string(),
    profileImage: joi_1.default.string(),
});
const loginSchema = joi_1.default.object({
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().min(6).required()
});
const followSchema = joi_1.default.object({
    senderId: joi_1.default.string().required(),
    receiverId: joi_1.default.string().required(),
    status: joi_1.default.string().required(),
    created_at: joi_1.default.date().default(Date.now),
    updated_at: joi_1.default.date().default(Date.now),
});
const joi_signup = (req, res, next) => {
    const { error } = signUpSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};
exports.joi_signup = joi_signup;
const joi_login = (req, res, next) => {
    const { error } = loginSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};
exports.joi_login = joi_login;
const joi_follow = (req, res, next) => {
    const { error } = followSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};
exports.joi_follow = joi_follow;
//# sourceMappingURL=joi.js.map