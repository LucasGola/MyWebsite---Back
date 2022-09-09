// These lines makes "require" available
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import { DataTypes } from 'sequelize';
import db from '../../db/models/index.js';
import { sendError, sendSuccess, errorLog } from '../util.js';
import { createLog } from './createLogs.js';
const Courses = require('../../db/models/courses.cjs')(db.sequelize, DataTypes);

export const create = async (req, res) => {
    const { name, platform, link, userId } = req.body;

    await db.sequelize.transaction(async (transaction) => {
        const course = await new Courses({
            name,
            platform,
            link,
        }, {
            transaction,
        }).save().then((data) => {
            const { id } = data;
            createLog('New Course', id, userId);
            sendSuccess(res, data);
        }).catch((err) => {
            errorLog(
                'Create Course',
                err.message,
            );
            sendError(res, err);
        });
    });
};