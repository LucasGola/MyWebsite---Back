import Sequelize from 'sequelize';
import models from '../../db/models';
import { sendError, sendSuccess, errorLog } from '../util';
import { createLog } from './createLogs';

export const create = async (req, res) => {
    const { name, platform, link, userId } = req.body;

    await Sequelize().transaction(async (transaction) => {
        const course = await models.Courses.create({
            name,
            platform,
            link,
        }, {
            transaction,
        }).then((data) => {
            const { courseId } = data.data;
            createLog('New Course', courseId, userId)
            sendSuccess(res, data);
        }).catch((err) => {
            errorLog(
                'Create Course',
                err.stack ? err.stack : err.error,
            );
            sendError(res, err);
        });
    });
};