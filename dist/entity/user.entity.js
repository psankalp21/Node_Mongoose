"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchIdbyEmail = exports.checkIfUserExists = void 0;
const user_1 = __importDefault(require("../database/models/user"));
async function checkIfUserExists(email) {
    try {
        const user = await user_1.default.findOne({ email: email });
        if (user)
            return true;
        return false;
    }
    catch (error) {
        console.error('Error while checking if the user exists:', error);
        return false;
    }
}
exports.checkIfUserExists = checkIfUserExists;
async function fetchIdbyEmail(uemail) {
    try {
        const user = await user_1.default.findOne({ email: uemail });
        if (!user) {
            return null;
        }
        const userId = user._id.toString();
        return userId;
    }
    catch (error) {
        console.error('Error while fetching user ID by email:', error);
        return null;
    }
}
exports.fetchIdbyEmail = fetchIdbyEmail;
//# sourceMappingURL=user.entity.js.map