import models from '../../db/models';
import { errorLog } from "../util";

export const createLog = async (status, userId) => {
  await models.UsersLogs.create({
    status,
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