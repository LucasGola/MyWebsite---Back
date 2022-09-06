import Sequelize, { TransactionLock } from 'sequelize';
import models from '../../db/models';
import { sendError, sendSuccess } from '../util';

export const create = async (req, res) => {
    const { name, platform, link } = req.body;

    await Sequelize().transaction(async (transaction) => {
        const course = await models.Courses.create({
            name,
            platform,
            link,
        }, {
            transaction,
        }).then((data) => {
            sendSuccess(res, data);
        }).catch((err) => {
            sendError(res, err);
        });
    });
};