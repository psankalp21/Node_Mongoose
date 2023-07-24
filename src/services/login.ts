import UserCollection from '../database/models/user';
import bcrypt from 'bcrypt';
import { generateToken } from '../middlewares/jwt';
import { redisConnect, redisVerify } from '../database/reddis';

export async function login_service(email: string, password: string): Promise<any> {
  try {
    const user = await UserCollection.findOne({ email });
    if (!user) {
      throw new Error('User not found');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }

    const token = generateToken({ userId: user._id });
    redisConnect(user._id,token)
    return { token, user };

  } catch (error) {
    console.log(error);
    throw new Error('Login failed');
  }
}
