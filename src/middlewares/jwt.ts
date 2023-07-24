import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const secretKey = '2201';

function generateToken(payload: any): string {
  const token = jwt.sign(payload, secretKey, { expiresIn: '1000s' });
  return token;
}

function verifyToken(req: Request, res: Response, next: NextFunction): any {
  try {
    const token = req.header('Authorization');
    if (!token) {
      throw new Error('Authorization token not found');
    }
    const decoded = jwt.verify(token, secretKey);
    
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({ error: 'Invalid token' });
  }
}

export { generateToken, verifyToken };
