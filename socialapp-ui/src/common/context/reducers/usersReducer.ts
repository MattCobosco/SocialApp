import * as actionTypes from '../actions/actionTypes/userTypes';
import { ISingleUser } from '../entities/users';

export interface IUsersReducer {
  users: ISingleUser[];
}

const defaultState = (): IUsersReducer => ({
  users: []
});

export default (state = defaultState(), action: any) => {
  switch(action.type) {
    case actionTypes.GET_USERS: {
      const payload: actionTypes.IUserTypes['GET_USERS'] = action;
      return {
        ...state,
        users: payload.users
      }
    }
    default: {
      return state;
    }
  }
}
