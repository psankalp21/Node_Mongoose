"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = __importDefault(require("./database/models/user"));
const profile_config_1 = __importDefault(require("./database/models/profile_config"));
const follow_1 = __importDefault(require("./database/models/follow"));
const post_1 = __importDefault(require("./database/models/post"));
const action_1 = __importDefault(require("./database/models/action"));
const routes_1 = __importDefault(require("./routes"));
const changeStreams_1 = __importDefault(require("./database/changeStreams"));
;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
mongoose_1.default.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
app.use(express_1.default.json());
app.use('/node', routes_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    user_1.default;
    profile_config_1.default;
    follow_1.default;
    post_1.default;
    action_1.default;
    changeStreams_1.default;
});
//# sourceMappingURL=index.js.map