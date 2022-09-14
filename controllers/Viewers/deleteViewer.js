import { errorLog, sendError, sendSuccess } from "../util";
import { createLog } from "./createLogs";
import models from '../../db/models';

export const deleteViewer = (req, res) => {
  const { id } = req.params;

  try {
    models.sequelize.transaction(async (transaction) => {
      await models.Viewers.destroy({ where: { id }, transaction }).then((data) => {
        createLog('Viewer Deleted', id); // TODO: add userId
        return sendSuccess(res, data);
      }).catch((err) => {
        errorLog('Delete Viewer', err);
        return sendError(res, err);
      });
    });
  } catch (err) {
    errorLog('Delete Viewer', err);
    return sendError(res, err);
  }
};