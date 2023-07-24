"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisVerify = exports.redisConnect = void 0;
const redis_1 = require("redis");
async function redisConnect(key, value) {
    const client = (0, redis_1.createClient)();
    client.on('error', err => console.log('Redis Client Error', err));
    await client.connect();
    await client.set(key, value);
    const resvalue = await client.get(key);
    console.log(`key value - ${resvalue}`);
    await client.disconnect();
}
exports.redisConnect = redisConnect;
async function redisVerify(key) {
    const client = (0, redis_1.createClient)();
    client.on('error', err => console.log('Redis Client Error', err));
    await client.connect();
    // await client.set(key,value);
    const resvalue = await client.get(key);
    console.log(`key value - ${resvalue}`);
    await client.disconnect();
    return resvalue;
}
exports.redisVerify = redisVerify;
//# sourceMappingURL=reddis.js.map