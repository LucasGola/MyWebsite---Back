import models from '../db/models';

export const sendError = (res, err, status, message) => {
    res.status(status || 500).json({
        status: message,
        err: err.message ? err.message : err.error,
        timestamp: new Date(),
    });
};

export const sendSuccess = (res, data, status, numberOfRows, message) => {
    let qty = 0;
    if (data && data.length) {
        qty = data.length;
        // eslint-disable-next-line no-param-reassign
        if (!status) status = 200;
    }
    res.status(status || 200).json({
        status: 'ok',
        data,
        timestamp: new Date(),
        numberOfRows: numberOfRows || qty,
    });
};

export const errorLog = async (module, error) => {
    try {
        await models.errorsLogs.create({
            module,
            error: error.message
        });
    } catch (err) {
        console.log(err)
    }
};