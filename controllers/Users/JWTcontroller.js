import JWT from 'jsonwebtoken';

export const createJWT = (dataToSign) => {
  const token = JWT.sign(dataToSign, process.env.JWT_SECRET, { expiresIn: '1h' });
  return token;
};