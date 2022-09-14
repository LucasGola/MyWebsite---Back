import models from '../../db/models';
import { errorLog } from "../util";

export const createLog = async (status, viewerId, userId) => {
  const log = await models.ViewersLogs.create({
    status,
    viewerId,
    userId,
  }).then((data) => {
    if (data.status = 'ok') return data;
  }).catch((logError) => {
    errorLog(
      'Create Course Log',
      logError.stack ? logError.stack : logError.error
    );
    return logError;
  });
};