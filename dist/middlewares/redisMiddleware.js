"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const redis_1 = require("redis");
const session_1 = __importDefault(require("../database/models/session"));
async function auth(req, res, next) {
    const client = (0, redis_1.createClient)();
    client.on("error", (err) => console.log("Redis Client Error", err));
    await client.connect();
    const token = req.headers.authorization;
    const verifyToken = jsonwebtoken_1.default.verify(token, '2201');
    if (verifyToken.id) {
        let findSession = await client.get(`${verifyToken.id}_session`) || await session_1.default.find(verifyToken.id);
        if (findSession.length != 0) {
            req.body.id = verifyToken.id;
            next();
        }
        else {
            res.send("Session out");
        }
    }
    else {
        res.send({ message: "invalid token" });
    }
}
exports.default = auth;
//# sourceMappingURL=redisMiddleware.js.map