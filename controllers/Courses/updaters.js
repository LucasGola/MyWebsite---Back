import { sendError, sendSuccess, errorLog } from '../util';
import { createLog } from './createLogs';
import models from '../../db/models';
import _ from 'lodash';

export const updateCourseInfos = (req, res) => {
  const { id } = req.params;
  const { name, platform, link, duration } = req.body;
  let values = {};
  let fieldsToUpdate = [];

  try {
    if (!_.isNil(name)) values.name = name; fieldsToUpdate.push('name');
    if (!_.isNil(platform)) values.platform = platform; fieldsToUpdate.push('platform');
    if (!_.isNil(link)) values.link = link; fieldsToUpdate.push('link');
    if (!_.isNil(duration)) values.duration = duration; fieldsToUpdate.push('duration');

    models.sequelize.transaction(async (transaction) => {
      await models.Courses.update(
        values,
        {
          fields: fieldsToUpdate,
          transaction,
          where: { id }
        }
      );
    });
    return sendSuccess(res);
  } catch (err) {
    errorLog('Update Course Infos', err);
    return sendError(res, err);
  }
};

export const updateCourseStatus = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    models.sequelize.transaction(async (transaction) => {
      await models.Courses.update({
        completed: status
      }, {
        fields: ['completed'],
        transaction,
        where: { id }
      });
    });
    return sendSuccess(res);
  } catch (err) {
    errorLog('Change Cour Status', err);
    return sendError(res, err);
  }
};

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
    else throw new Error('Nothing to update!');

    models.sequelize.transaction(async (transaction) => {
      await models.Courses.update(value, {
        fields: [fieldToUpdate],
        transaction,
        where: { id }
      });
    });
    createLog('Rate Course', id); // TODO: ad userId
    return sendSuccess(res);
  } catch (err) {
    errorLog('Rate Course', err);
    return sendError(res, err);
  };
};