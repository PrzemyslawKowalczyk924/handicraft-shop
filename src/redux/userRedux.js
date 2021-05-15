/* selectors */
export const getUserInfo = ({user}) => user;

/* action name creator */
const reducerName = 'user';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const SET_USER_ONLINE = createActionName('SET_USER_ONLINE');
const SET_USER_OFFLINE = createActionName('SET_USER_OFFLINE');

/* action creators */
export const setUserOnline = () => ({ type: SET_USER_ONLINE });
export const setUserOffline = () => ({ type: SET_USER_OFFLINE });

/* thunk creators */

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case SET_USER_ONLINE: {
      return {
        ...statePart,
        status: true,
      };
    }
    case SET_USER_OFFLINE: {
      return {
        ...statePart,
        status: false,
      };
    }
    default:
      return statePart;
  }
};
