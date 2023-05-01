import JWT from 'jsonwebtoken';

export const createJWT = (dataToSign) => JWT.sign(dataToSign, process.env.JWT_SECRET, { expiresIn: '1h' });