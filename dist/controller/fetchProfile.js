"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchProfile = void 0;
const fetchProfile_1 = __importDefault(require("../services/fetchProfile"));
async function fetchProfile(req, res) {
    const { email } = req.body;
    try {
        const profileService = new fetchProfile_1.default();
        const profiles = await profileService.fetch(email);
        res.send(profiles);
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
}
exports.fetchProfile = fetchProfile;
//# sourceMappingURL=fetchProfile.js.map