import models from '../../db/models';
import { errorLog } from "../util";

export const createLog = async (status, newUserId, userId) => {
  const log = await models.UsersLogs.create({
    status,
    newUserId,
    userId,
  }).then((data) => {
    if (data.status = 'ok') return data;
  }).catch((logError) => {
    errorLog(
      'Create User Log',
      logError.error
    );
    return logError;
  });
};