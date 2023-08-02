import FollowCollection from '../database/models/follow';
import UserCollection from '../database/models/user';


export async function fetchProfiles(id: string): Promise<object> {
  try {
    const users = await FollowCollection.find({ sender_id: id }, { receiver_id: 1 });

    const receiverIds = users.map(user => user.receiver_id);

    const profiles = await UserCollection.find({ _id: { $in: receiverIds } }, { _id:0 ,name: 1 });

    return profiles;
  } catch (error) {
    console.error('Error while fetching profiles:', error);
    throw new Error('Internal Server Error'); 
  }
}


  