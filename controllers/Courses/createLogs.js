// These lines makes "require" available
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import { DataTypes } from 'sequelize';
import db from '../../db/models/index.js';
const CoursesLogs = require('../../db/models/courseslogs.cjs')(db.sequelize, DataTypes);
import { errorLog } from "../util.js";

export const createLog = async (status, courseId, userId) => {
  const log = await new CoursesLogs({
    status,
    courseId,
    userId,
  }).save().then((data) => {
    if (data.status = 'ok') return data;
  }).catch((logError) => {
    errorLog(
      'Create Course Log',
      logError.stack ? logError.stack : logError.error
    );
    return logError;
  });
};