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
// import SavedPostCollection from './database/models/savedpost';
const action_1 = __importDefault(require("./database/models/action"));
const routes_1 = __importDefault(require("./routes"));
// import { redisConnect } from './database/reddis';
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_1 = __importDefault(require("../swagger"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.default));
mongoose_1.default.connect('mongodb://localhost:27017/instagram', {
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
    //   SavedPostCollection;
    action_1.default;
});
//# sourceMappingURL=index.js.map