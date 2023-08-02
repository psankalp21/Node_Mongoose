"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.post = void 0;
const login_1 = require("../services/login");
async function post(req, res) {
    try {
        const { email, password } = req.body;
        const user = await (0, login_1.login_service)(email, password);
        if (!user) {
            res.send("Invalid Credentials");
        }
        else {
            res.status(201).json({
                message: 'Login ',
                user
            });
        }
    }
    catch (error) {
        console.log(error);
        res.send("Unable to login due to some error!");
    }
}
exports.post = post;
//# sourceMappingURL=post.js.map