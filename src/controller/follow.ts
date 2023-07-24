import { Request, Response } from 'express';
import { follow_service } from '../services/follow';
import User from '../database/models/user';
import FollowCollection from '../database/models/follow';

export async function follow(req: Request, res: Response) {
    try {
        const { user_email, target_email } = req.body;

        const user = await User.findOne(
            { email: user_email },
            { user_id: 1 }
        );

        const target = await User.findOne(
            { email: target_email },
            {
                user_id: 1,
                name: 1
            }
        );

        if (!target || !user) {
            console.log("User not found")
            res.send("User not found")
        }
        else {
            const x = user._id;
            const y = target._id;
            const n = target.name;

            const check = await FollowCollection.findOne(
                { sender_id: x, receiver_id: y }
            );

            if (check) {
                throw new Error('You already follow him');
            }
            await follow_service(x, y);
        }
        res.send(`Followed Success`)

    } catch (error) {
        console.log("hii")
        console.log(error);
        res.send({error: error.message});
    }
}
