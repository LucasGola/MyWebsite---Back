import models from '../../db/models';
import { errorLog } from "../util";

export const createLog = async (status, courseId, userId) => {
  await models.CoursesLogs.create({
    status,
    courseId,
    userId,
  }).then((data) => {
    if (data.status = 'ok') return data;
  }).catch((logError) => {
    errorLog(
      'Create Course Log',
      logError.error
    );
    return logError;
  });
};