"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const login_1 = require("../controller/login");
const joi_1 = require("../middlewares/joi");
const router = express_1.default.Router();
router.post('/login', joi_1.joi_login, login_1.login);
exports.default = router;
//# sourceMappingURL=login.js.map