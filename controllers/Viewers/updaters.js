import moment from 'moment';
import models from '../../db/models';
import { errorLog, sendError, sendSuccess } from '../util';
import { createLog } from './createLogs';

export const markAnswered = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    let value;
    if (status === true) value = moment().utcOffset('-03:00');
    else if (status === false) value = null;
    else throw new Error('Could not update viewer status!');

    models.sequelize.transaction(async (transaction) => {
      await models.Viewers.update({
        repliedAt: value
      }, {
        fields: ['repliedAt'],
        transaction,
        where: { id }
      }).then(() => {
        createLog('Viewer Replied', id) // TODO: add userId
        return sendSuccess(res);
      }).catch((err) => {
        errorLog('Change answeredAt', err);
        return sendError(res, err);
      });
    });
  } catch (err) {
    errorLog('Change answeredAt', err);
    return sendError(res, err);
  }
};