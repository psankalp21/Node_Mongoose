"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.follow_service = void 0;
const follow_1 = __importDefault(require("../database/models/follow"));
async function follow_service(user_email, target_email) {
    try {
        await follow_1.default.create({
            sender_id: user_email,
            receiver_id: target_email,
            status: "pending",
        });
    }
    catch (error) {
        console.log(error);
        throw new Error('Error');
    }
}
exports.follow_service = follow_service;
//# sourceMappingURL=follow.js.map