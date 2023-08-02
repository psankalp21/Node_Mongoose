"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const post_1 = require("../controller/post");
const jwt_1 = require("../middlewares/jwt");
const router = express_1.default.Router();
router.post('/post', jwt_1.verifyToken, post_1.post);
exports.default = router;
//# sourceMappingURL=post.js.map