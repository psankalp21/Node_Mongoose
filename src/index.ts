import express from 'express';
import mongoose, { ConnectOptions } from 'mongoose';
import UserCollection from './database/models/user';
import ProfileConfigCollection from './database/models/profile_config';
import FollowCollection from './database/models/follow';
import PostCollection from './database/models/post';
import ActionCollection from './database/models/action';
import routes from './routes';
import changeStream from './database/changeStreams';
;
import dotenv from 'dotenv';
dotenv.config();



const app = express();
const PORT = process.env.PORT || 5000; 

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions);

app.use(express.json());
app.use('/node', routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  UserCollection;
  ProfileConfigCollection;
  FollowCollection;
  PostCollection;
  ActionCollection;
  changeStream;
});
