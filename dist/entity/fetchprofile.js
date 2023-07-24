"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchIdbyEmail = exports.fetchProfiles = exports.checkIfUserExists = void 0;
const follow_1 = __importDefault(require("../database/models/follow"));
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
async function fetchProfiles(id) {
    try {
        const users = await follow_1.default.find({ sender_id: id }, { receiver_id: 1 });
        // Extract the receiver_id values from the query results
        const receiverIds = users.map(user => user.receiver_id);
        // Fetch the names from UserCollection based on the receiverIds
        const profiles = await user_1.default.find({ _id: { $in: receiverIds } }, { _id: 0, name: 1 });
        return profiles;
    }
    catch (error) {
        console.error('Error while fetching profiles:', error);
        throw new Error('Internal Server Error'); // Or return an appropriate error response
    }
}
exports.fetchProfiles = fetchProfiles;
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
//# sourceMappingURL=fetchprofile.js.map