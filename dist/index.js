"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const YAML = __importStar(require("yamljs"));
const path = __importStar(require("path"));
const app = (0, express_1.default)();
const PORT = 3000;
const swaggerDocument = YAML.load(path.join(__dirname, '../swagger.yaml'));
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
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