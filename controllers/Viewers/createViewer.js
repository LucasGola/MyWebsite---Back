import models from '../../db/models';
import { errorLog, sendError, sendSuccess } from '../util';
import { createLog } from './createLogs';

export const create = (req, res) => {
  const { name, channel, phone, email, linkedin, message } = req.body;

  models.sequelize.transaction(async (transaction) => {
    const viewer = await models.Viewers.create({
      name,
      channel,
      phone,
      email,
      linkedin,
      message
    }, {
      transaction
    }).then((data) => {
      const { id } = data;
      createLog('New Viewer', id); // TODO: add viewerId
      return sendSuccess(res, data);
    }).catch((err) => {
      errorLog('Create Viewer', err);
      return sendError(res, err);
    });
  });
};