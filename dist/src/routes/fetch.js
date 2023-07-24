"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fetchProfile_1 = require("../controller/fetchProfile");
const jwt_1 = require("../middlewares/jwt");
const router = express_1.default.Router();
router.post('/fetch', jwt_1.verifyToken, fetchProfile_1.fetchProfile);
exports.default = router;
//# sourceMappingURL=fetch.js.map