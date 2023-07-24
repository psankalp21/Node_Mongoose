import UserCollection from '../database/models/user';

export async function checkIfUserExists(email: string): Promise<boolean> {
    try {
        const user = await UserCollection.findOne({ email:email });
        if (user)
            return true;
        return false
    } catch (error) {
        console.error('Error while checking if the user exists:', error);
        return false;
    }
}


export async function fetchIdbyEmail(uemail: string): Promise<string | null> {
    try {
      const user = await UserCollection.findOne({ email: uemail });
  
      if (!user) {
        return null;
      }
  
      const userId = user._id.toString();
      return userId;
    } catch (error) {
      console.error('Error while fetching user ID by email:', error);
      return null; 
    }
  }