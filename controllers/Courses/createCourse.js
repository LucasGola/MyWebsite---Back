import { sendError, sendSuccess, errorLog } from '../util';
import { createLog } from './createLogs';
import models from '../../db/models';

export const create = async (req, res) => {
    const { name, platform, link, userId } = req.body;

    models.sequelize.transaction(async (transaction) => {
        await models.Courses.create({
            name,
            platform,
            link,
        }, {
            transaction,
        }).then((data) => {
            const { id } = data;
            createLog('New Course', id, userId);
            return sendSuccess(res, data);
        }).catch((err) => {
            errorLog(
                'Create Course',
                err.message,
            );
            return sendError(res, err);
        });
    });
};