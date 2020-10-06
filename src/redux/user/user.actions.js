const { SET_CURRENT_USER } = require('./user.action-types');

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user,
});
