"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchProfiles = void 0;
const follow_1 = __importDefault(require("../database/models/follow"));
const user_1 = __importDefault(require("../database/models/user"));
async function fetchProfiles(id) {
    try {
        const users = await follow_1.default.find({ sender_id: id }, { receiver_id: 1 });
        const receiverIds = users.map(user => user.receiver_id);
        const profiles = await user_1.default.find({ _id: { $in: receiverIds } }, { _id: 0, name: 1 });
        return profiles;
    }
    catch (error) {
        console.error('Error while fetching profiles:', error);
        throw new Error('Internal Server Error');
    }
}
exports.fetchProfiles = fetchProfiles;
//# sourceMappingURL=fetchprofile.entity.js.map