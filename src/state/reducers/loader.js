import { LoaderActionType } from '../actions/action-types';

const loaderReducer = (state = false, action) => {
  switch (action.type) {
    case LoaderActionType.SHOW_LOADER:
      return true;
    case LoaderActionType.HIDE_LOADER:
      return false;
    default:
      return state;
  }
};

export default loaderReducer;
