import JWT from 'jsonwebtoken';

export const createJWT = (dataToSign) => {
  const token = JWT.sign(dataToSign, process.env.JWT_SECRET, { expiresIn: '1h' });
  return token;
};

export const verifyToken = (token) => {
  try {
    const decoded = JWT.verify(token, process.env.JWT_SECRET);

    if (decoded.exp < Date.now() / 1000) {
      throw new Error('Token expirado');
    }

    // Retornar o ID do usuário
    return decoded.userId;
  } catch (err) {
    return err;
  }
};
