import { Request, Response } from 'express';
import { login_service } from '../services/login';

export async function post(req: Request, res: Response) {
    try {
        const { email, password } = req.body;
        const user = await login_service(
            email,
            password
        );
        if(!user)
        {
            res.send("Invalid Credentials")
        }
        else{
        res.status(201).json({
            message: 'Login successful',
            user
        });
    }

    } catch (error) {
        console.log(error);
        res.send("Unable to login due to some error!")
    }
}
