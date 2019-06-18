import { GithubService } from '../services';
import { GithubConstants } from '../constants';
import { alertActions } from './index';

export const GithubActions = {
  searchUserNames,
  addUser,
  getUsers,
  editUser,
  deleteUser,
  getUserRepository
};

function searchUserNames(value) {
  return dispatch => {
    dispatch(request());

    return GithubService.searchUserNames(value)
      .then(
        data => {
          dispatch(success(data));
          return data;
        },
        error => {
          dispatch(failure(error));
          dispatch(alertActions.error(error, error));
          return error
        }
      );
  };

  function request(data) { return { type: GithubConstants.SEARCH_USER_REQUEST, data } }
  function success(data) { return { type: GithubConstants.SEARCH_USER_SUCCESS, data } }
  function failure(error) { return { type: GithubConstants.SEARCH_USER_FAILURE, error } }
}

function addUser(user) {
  return dispatch => {
    dispatch(request());

    return GithubService.addUser(user)
      .then(
        data => {
          dispatch(success(data));
          return data;
        },
        error => {
          dispatch(failure(error));
          dispatch(alertActions.error(error, error));
          return error
        }
      );
  };

  function request(data) { return { type: GithubConstants.ADD_USER_REQUEST, data } }
  function success(data) { return { type: GithubConstants.ADD_USER_SUCCESS, data } }
  function failure(error) { return { type: GithubConstants.ADD_USER_FAILURE, error } }
}

function getUsers() {
  return dispatch => {
    dispatch(request());

    return GithubService.getUsers()
      .then(
        data => {
          dispatch(success(data));
          return data;
        },
        error => {
          dispatch(failure(error));
          dispatch(alertActions.error(error, error));
          return error
        }
      );
  };

  function request(data) { return { type: GithubConstants.LIST_USER_REQUEST, data } }
  function success(data) { return { type: GithubConstants.LIST_USER_SUCCESS, data } }
  function failure(error) { return { type: GithubConstants.LIST_USER_FAILURE, error } }
}

function editUser(userId, user) {
  return dispatch => {
    dispatch(request());

    return GithubService.editUser(userId, user)
      .then(
        data => {
          dispatch(success(data));
          return data;
        },
        error => {
          dispatch(failure(error));
          dispatch(alertActions.error(error, error));
          return error
        }
      );
  };

  function request(data) { return { type: GithubConstants.EDIT_USER_REQUEST, data } }
  function success(data) { return { type: GithubConstants.EDIT_USER_SUCCESS, data } }
  function failure(error) { return { type: GithubConstants.EDIT_USER_FAILURE, error } }
}

function deleteUser(userId) {
  return dispatch => {
    dispatch(request());

    return GithubService.deleteUser(userId)
      .then(
        data => {
          dispatch(success(data));
          return data;
        },
        error => {
          dispatch(failure(error));
          dispatch(alertActions.error(error, error));
          return error
        }
      );
  };

  function request(data) { return { type: GithubConstants.DELETE_USER_REQUEST, data } }
  function success(data) { return { type: GithubConstants.DELETE_USER_SUCCESS, data } }
  function failure(error) { return { type: GithubConstants.DELETE_USER_FAILURE, error } }
}

function getUserRepository(username) {
  return dispatch => {
    dispatch(request());

    return GithubService.getUserRepository(username)
      .then(
        data => {
          dispatch(success(data));
          return data;
        },
        error => {
          dispatch(failure(error));
          dispatch(alertActions.error(error, error));
          return error
        }
      );
  };

  function request(data) { return { type: GithubConstants.USER_REPOSITORY_REQUEST, data } }
  function success(data) { return { type: GithubConstants.USER_REPOSITORY_SUCCESS, data } }
  function failure(error) { return { type: GithubConstants.USER_REPOSITORY_FAILURE, error } }
}
