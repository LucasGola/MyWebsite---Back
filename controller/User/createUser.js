import models from '../../models';
import _ from 'lodash';
import sendSuccess from '../../utils/sendSuccess';
import sendError from '../../utils/sendError';

const createUser = async (body, transaction) => {
  const { name, username, password, confirm } = body;
  try {
    if (password !== confirm) {
      throw new Error('As senhas devem ser iguais!');
    }

    const userData = await models.Users.Create({
      name,
      username,
      password,
      createdAt: moment().utcOffset('-03:00'),
    }, { transaction })
      .then((data) => {
        if (_.isNil(data)) throw new Error('Valores inseridos inválidos!');

        const { id } = data;
        await models.Logs.Create({
          event: 'New User',
          userId: id,
          dateTimestamp: moment().utcOffset('-03:00'),
        }, { transaction })
          .then((data) => {
            if (data.status !== 'ok') throw new Error('Não foi possível criar o usuário');
          });
      });

    return userData;
  } catch (createUserError) {
    console.log(createUserError);
    await models.Logs.Create({
      event: 'User Error',
      dateTimestamp: moment().utcOffset('-03:00'),
    }, { transaction });
  }
};

export const createUserRoute = (req, res) => {
  const { body } = req;
  return models.Sequelize.Transaction(async (transaction) => {
    try {
      const user = await createUser(body, transaction);

      return sendSuccess(res, user);
    } catch (createUserError) {
      console.log(createUserError);
      sendError(res, createUserError);
    }
  });
};