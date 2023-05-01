import models from '../../db/models';
import { errorLog, sendError, sendSuccess } from '../util';
import _ from 'lodash';
import bcrypt from 'bcryptjs';
import { createLog } from './createLogs';
import { createJWT } from './JWTcontroller';

export const login = async (req, res) => {
  const { email, password } = req.body;
  const { ip } = req;

  try {
    const user = await models.Users.findOne({ where: { email } });

    if (!user) throw new Error('Usuário não encontrado.', 401);

    const validPassord = await bcrypt.compare(password, user.password);
    if (!validPassord) throw new Error('Senha incorreta.', 401);

    const token = createJWT({ userId: user.id, ip: ip });

    models.sequelize.transaction(async (transaction) => {
      await models.Users.update(
        { token },
        {
          fields: ['token'],
          transaction,
          where: { id: user.id }
        }
      );
    });

    createLog('User Login', user.id);
    return sendSuccess(res, { user, token }, 200);
  } catch (err) {
    errorLog('Login User', err);
    return sendError(res, err);
  }
};