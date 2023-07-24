import { Request, Response } from 'express';
import { signup_service } from '../services/signup';

export async function signup(req: Request, res: Response) {
    try {
        const { name, email, password, dob, phone, display_pic, about } = req.body;

        const user = await signup_service(
            name,
            email,
            password,
            dob,
            phone,
            display_pic,
            about
        );

        res.status(201).json({
            message: 'Signup successful',
            user
        });

    } catch (error) {
        console.log(error);
        res.send("Unable to signup due to some error!")
    }
}
