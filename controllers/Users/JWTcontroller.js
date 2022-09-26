import JWT from 'jsonwebtoken';
import models from '../../models';

const createJWT = (dataToSign) => JWT.sign(dataToSign, process.env.SECRET);