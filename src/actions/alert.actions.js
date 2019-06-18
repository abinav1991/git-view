import { alertConstants } from '../constants';

export const alertActions = {
	success,
	error,
	clear
};

function success(message) {

  return (dispatch) => {
    setTimeout(function(){
      dispatch(alertActions.clear());
    },5000)

    dispatch( { type: alertConstants.SUCCESS, message });
  };
	
}

function error(message, e) {
  return (dispatch) => {
    setTimeout(function(){
      dispatch(alertActions.clear());
    },5000)

    dispatch( { type: alertConstants.ERROR, message: message || 'Something went wrong please try again' });
  };
}

function clear() {
	return { type: alertConstants.CLEAR };
}