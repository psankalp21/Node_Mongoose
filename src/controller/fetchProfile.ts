import { Request, Response } from 'express';
import FetchProfileService from '../services/fetchProfile';


export async function fetchProfile(req: Request, res: Response) {
  const { email } = req.body;

  try {
    const profileService = new FetchProfileService();
    const profiles = await profileService.fetch(email);
    res.send(profiles);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
}
