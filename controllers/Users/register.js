import models from '../../db/models';
import { errorLog, sendError, sendSuccess } from '../util';
import _ from 'lodash';
import bcrypt from 'bcryptjs';
import JWT from 'jsonwebtoken';

export const register = async (req, res) => {
  const { name, username, password, email, permission } = req.body;
  const { ip } = req;

  try {
    if (_.isNil(name) || _.isNil(username) || _.isNil(password) || _.isNil(email)) {
      throw new Error('Todos os campos devem ser preenchidos!');
    };

    await models.sequelize.transaction(async (transaction) => {
      const oldUser = await models.Users.findOne({ where: { email } });

      if (oldUser) throw new Error('Usuário já existe!');

      const encryptedPassword = await bcrypt.hash(password, 10);

      const user = await models.Users.create({
        name,
        username,
        email: email.toLowerCase(),
        password: encryptedPassword,
        permission,
      }, { transaction });
      
      if (!user) throw new Error('Não foi possível criar o usuário.');

      return sendSuccess(res, user);
    });
  } catch (err) {
    errorLog('Register User', err);
    return sendError(res, err);
  }
};