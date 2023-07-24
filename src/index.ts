import express from 'express';
import mongoose, { ConnectOptions } from 'mongoose';
import UserCollection from './database/models/user';
import ProfileConfigCollection from './database/models/profile_config';
import FollowCollection from './database/models/follow';
import PostCollection from './database/models/post';
// import SavedPostCollection from './database/models/savedpost';
import ActionCollection from './database/models/action';
import routes from './routes';
// import { redisConnect } from './database/reddis';

import swaggerUi from 'swagger-ui-express';
import * as YAML from 'yamljs';
import * as path from 'path';

const app = express();
const PORT = 3000;

const swaggerDocument = YAML.load(path.join(__dirname, '../swagger.yaml')); 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


mongoose.connect('mongodb://localhost:27017/instagram', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions);


app.use(express.json())
app.use('/node', routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  UserCollection;
  ProfileConfigCollection;
  FollowCollection;
  PostCollection;
  //   SavedPostCollection;
  ActionCollection;
});
