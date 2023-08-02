import UserCollection from '../database/models/user';
import bcrypt from 'bcrypt';

export async function signup_service(name: string, email: string, password: string, dob: string, phone: string, display_pic: string, about: string): Promise<any> {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await UserCollection.create({
      email: email,
      password: hashedPassword,
      name: name,
      dob: dob,
      phone: phone,
      display_pic: display_pic,
      about: about
    });

  } catch (error) {
    console.log(error);
    throw new Error('An error occurred during signup');
  }
}
