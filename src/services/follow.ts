import FollowCollection from '../database/models/follow';

export async function follow_service(user_email: string, target_email: string): Promise<any> {
  try {
    await FollowCollection.create({
      sender_id: user_email,
      receiver_id: target_email,
      status:"pending",
    });

  } catch (error) {
    console.log(error);
    throw new Error('Error');
  }
}
