import { sendError, sendSuccess, errorLog } from '../util';
import { createLog } from './createLogs';
import models from '../../db/models';

export const deleteCourse = (req, res) => {
  const { id } = req.params;

  try {
    models.sequelize.transaction(async (transaction) => {
      const userDeleted = await models.Courses.destroy({
        where: { id },
        transaction
      }).then((data) => {
        createLog('Course Deleted', id); // TODO: ad userId
        return sendSuccess(res, userDeleted);
      });
    });
  } catch (err) {
    errorLog('Delete Course', err);
    return sendError(res, err);
  }
};