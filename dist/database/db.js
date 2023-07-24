"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisConnect = void 0;
const redis_1 = require("redis");
async function redisConnect() {
    const client = (0, redis_1.createClient)();
    client.on('error', err => console.log('Redis Client Error', err));
    await client.connect();
    await client.set('key', 'value');
    const value = await client.get('key');
    await client.disconnect();
}
exports.redisConnect = redisConnect;
//# sourceMappingURL=db.js.map