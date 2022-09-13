import models from '../../db/models';
import { errorLog, sendError, sendSuccess } from '../util';

export const getAll = async (req, res) => {
  try {
    const courses = await models.Courses.findAll();
    return sendSuccess(res, courses);
  } catch (err) {
    errorLog('Get All Courses', err);
    return sendError(res, err);
  }
};

export const getCourseById = async (req, res) => {
  const { id } = req.params;
  try {
    const course = await models.Courses.findByPk(id);
    return sendSuccess(res, course);
  } catch (err) {
    errorLog('Get Course', err);
    return sendError(res, err);
  }
};