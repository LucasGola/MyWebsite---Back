import models from '../../models';
import _ from 'lodash';
import sendSuccess from '../../utils/sendSuccess';
import sendError from '../../utils/sendError';

export default getLoginEventRoute = async (req, res) => {
  const { id } = req.params;
  try {
    const event = await models.logs.findOne({
      where: {
        id,
      }
    });

    if (_.isNil(event)) throw new Error('Não foi possível encontrar o evento!');

    sendSuccess(res, event);
  } catch (getLoginEventError) {
    console.log(getLoginEventError);
    sendError(res, getLoginEventError);
  }
};