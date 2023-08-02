import UserCollection from '../database/models/user';
import bcrypt from 'bcrypt';
import { generateToken } from '../middlewares/jwt';
import { createClient } from 'redis';
export async function login_service(email: string, password: string): Promise<any> {
  try {
    const client = createClient();
    client.connect();
   
    const user = await UserCollection.findOne({ email });
    if (!user) {
      throw new Error('User not found');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }
    let session_payload: any = {
      user_id: user._id,
      device_id: "2201",
      IP_address: "192.168.0.220",
      isSessionSctive: true

    }
    
    const token = generateToken({ userId: user._id });


    await client.set(`${user._id}_session`, JSON.stringify(session_payload))

    return { token, user };

  } catch (error) {
    console.log(error);
    throw new Error('Login failed');
  }
}
