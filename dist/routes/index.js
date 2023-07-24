"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const signup_1 = __importDefault(require("./signup"));
const login_1 = __importDefault(require("./login"));
const follow_1 = __importDefault(require("./follow"));
const fetch_1 = __importDefault(require("./fetch"));
const router = express_1.default.Router();
router.use('/ig', signup_1.default, login_1.default, follow_1.default, fetch_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map