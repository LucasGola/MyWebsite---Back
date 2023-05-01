import models from '../../db/models';
import { errorLog, sendError, sendSuccess } from '../util';
import _ from 'lodash';
import bcrypt from 'bcryptjs';
import { createLog } from './createLogs';

export const register = async (req, res) => {
  const { name, username, password, confirmPassword, email, permission } = req.body;
  const { ip } = req;

  try {
    if (_.isNil(name) || _.isNil(username) || _.isNil(password) || _.isNil(email)) {
      throw new Error('Todos os campos devem ser preenchidos!');
    };

    if (password != confirmPassword) {
      throw new Error('As senhas não correspondem!');
    }

    await models.sequelize.transaction(async (transaction) => {
      const oldUser = await models.Users.findOne({ where: { email } });

      if (oldUser) throw new Error('Usuário já existente, altere o e-mail ou recupere a senha.');

      const encryptedPassword = await bcrypt.hash(password, 10);

      const user = await models.Users.create({
        name,
        username,
        email: email.toLowerCase(),
        password: encryptedPassword,
        permission,
      }, { transaction });

      if (!user) throw new Error('Não foi possível criar o usuário. Tente novamente em alguns minutos.');

      createLog('User Created', user.id);
      return sendSuccess(res, { user }, 201);
    });
  } catch (err) {
    errorLog('Register User', err);
    return sendError(res, err, 409);
  }
};