"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const setupChangeStreams = () => {
    const db = mongoose_1.default.connection;
    const usersCollection = db.collection('users');
    const changeStream = usersCollection.watch();
    changeStream.on('change', (change) => {
        if (change.operationType === 'insert') {
            console.log('User created:', change.fullDocument);
            // You can perform any other action you want with the newly inserted user data.
        }
    });
};
exports.default = setupChangeStreams;
//# sourceMappingURL=changeStreams.js.map