"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.follow = void 0;
const follow_1 = require("../services/follow");
const user_1 = __importDefault(require("../database/models/user"));
const follow_2 = __importDefault(require("../database/models/follow"));
async function follow(req, res) {
    try {
        const { user_email, target_email } = req.body;
        const user = await user_1.default.findOne({ email: user_email }, { user_id: 1 });
        const target = await user_1.default.findOne({ email: target_email }, {
            user_id: 1,
            name: 1
        });
        if (!target || !user) {
            console.log("User not found");
            res.send("User not found");
        }
        else {
            const x = user._id;
            const y = target._id;
            const n = target.name;
            const check = await follow_2.default.findOne({ sender_id: x, receiver_id: y });
            if (check) {
                throw new Error('You already follow him');
            }
            await (0, follow_1.follow_service)(x, y);
        }
        res.send(`Followed Success`);
    }
    catch (error) {
        console.log("hii");
        console.log(error);
        res.send({ error: error.message });
    }
}
exports.follow = follow;
//# sourceMappingURL=follow.js.map