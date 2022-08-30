import models from '../../models';
import moment from 'moment'

export const createLoginLog = (userId) => models.Logs.create({
  event: 'User Login',
  userId,
  dateTimestamp: moment().utcOffset('-03:00').format('YYYY-MM-DD HH:mm:ss A')
});

export const createLogoutLog = (userId) => models.Logs.create({
  event: 'User Logout',
  userId,
  dateTimestamp: moment().utcOffset('-03:00').format('YYYY-MM-DD HH:mm:ss A')
});

export const createNewUserLog = (userId) => models.Logs.create({
  event: 'New User',
  userId,
  dateTimestamp: moment().utcOffset('-03:00').format('YYYY-MM-DD HH:mm:ss A')
});

export const createDeleteUserLog = (userId) => models.Logs.create({
  event: 'User Deleted',
  userId,
  dateTimestamp: moment().utcOffset('-03:00').format('YYYY-MM-DD HH:mm:ss A')
});
