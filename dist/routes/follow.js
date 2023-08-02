"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const follow_1 = require("../controller/follow");
const jwt_1 = require("../middlewares/jwt");
const router = express_1.default.Router();
router.post('/follow', jwt_1.verifyToken, follow_1.follow);
exports.default = router;
//# sourceMappingURL=follow.js.map