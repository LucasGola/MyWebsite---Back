import { sendError, sendSuccess, errorLog } from '../util';
import { createLog } from './createLogs';
import models from '../../db/models';

export const rateCourse = async (req, res) => {
  const { id } = req.params;
  const { rateUp, rateDown } = req.body;

  try {
    let fieldToUpdate;
    let value;
    if (rateUp) {
      fieldToUpdate = 'rateUp';
      value = { rateUp: rateUp };
    }
    else if (rateDown) {
      fieldToUpdate = 'rateDown';
      value = { rateDown: rateDown };
    }
    else throw new Error('Nothing to update!')

    models.sequelize.transaction(async (transaction) => {
      await models.Courses.update(value, {
        fields: [fieldToUpdate],
        transaction,
        where: { id }
      });
    });
    createLog('Update Course', id) // TODO: ad userId
    return sendSuccess(res)
  } catch (err) {
    errorLog('Rate Course', err)
    return sendError(res, err);
  };
};