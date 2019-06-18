import { alertConstants } from '../constants';

export function alert(state = {}, action) {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        type: 'success',
        message: action.message,
        visible:true
      };
    case alertConstants.ERROR:
      return {
        type: 'danger',
        message: action.message,
        visible:true
      };
    case alertConstants.CLEAR:
      return {
        visible:false
      };
    default:
      return state
  }
}