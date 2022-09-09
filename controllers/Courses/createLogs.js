import { Sequelize } from "../../db/models";
import models from '../../db/models'
import { sendError, SendSuccess, errorLog } from "../util";

export const createLog = async (status, courseId, userId) => {
  const log = await models.coursesLogs.create({
    status,
    courseId,
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