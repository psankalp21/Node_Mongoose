import { checkIfUserExists, fetchIdbyEmail } from "../entity/user.entity";
import { fetchProfiles } from "../entity/fetchprofile.entity";



class FetchProfileService {
    async fetch(email: string) {

        const userExists = await checkIfUserExists(email);

        if (userExists) {

            const userId = await this.fetchId(email);
            const profiles = await fetchProfiles(userId);
            console.log(profiles)
            return profiles;
        } else {
            return null;
        }
    }

    async fetchId(email: string) {
        return fetchIdbyEmail(email);
    }

    async ifUserExists(email: string) {
        const userExists = await checkIfUserExists(email);
        return userExists;
    }
}

export default FetchProfileService;
