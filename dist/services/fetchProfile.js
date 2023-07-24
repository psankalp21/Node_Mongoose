"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_entity_1 = require("../entity/user.entity");
const fetchprofile_entity_1 = require("../entity/fetchprofile.entity");
class FetchProfileService {
    async fetch(email) {
        const userExists = await (0, user_entity_1.checkIfUserExists)(email);
        if (userExists) {
            const userId = await this.fetchId(email);
            const profiles = await (0, fetchprofile_entity_1.fetchProfiles)(userId);
            console.log(profiles);
            return profiles;
        }
        else {
            return null;
        }
    }
    async fetchId(email) {
        return (0, user_entity_1.fetchIdbyEmail)(email);
    }
    async ifUserExists(email) {
        const userExists = await (0, user_entity_1.checkIfUserExists)(email);
        return userExists;
    }
}
exports.default = FetchProfileService;
//# sourceMappingURL=fetchProfile.js.map