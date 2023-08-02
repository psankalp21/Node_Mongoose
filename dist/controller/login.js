"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const login_1 = require("../services/login");
async function login(req, res) {
    try {
        const { email, password } = req.body;
        const user = await (0, login_1.login_service)(email, password);
        if (!user) {
            res.send("Invalid Credentials");
        }
        else {
            res.status(201).json({
                message: 'Login successful',
                user
            });
        }
    }
    catch (error) {
        console.log(error);
        res.send("Unable to login due to some error!");
    }
}
exports.login = login;
//# sourceMappingURL=login.js.map