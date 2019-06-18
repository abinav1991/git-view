import { GithubConstants } from '../constants';

const initialState = {
  searchlist: [],
  users: [],
  userAddMessage: {},
  userEditMessage: {},
  userDeleteMessage: {},
  userRepos: []
}

export function github(state = initialState, action) {
  switch (action.type) {

    case GithubConstants.SEARCH_USER_SUCCESS:
      if(action.data.items){
        return {
          ...state,
          searchlist: action.data.items
        };
      }else{
        return {
          ...state,
          searchlist: []
        };
      }

    case GithubConstants.SEARCH_USER_FAILURE:
      return {
        ...state,
        searchlist: []
      };

    case GithubConstants.ADD_USER_SUCCESS:
      return {
        ...state,
        userAddMessage: action.data
      };

    case GithubConstants.ADD_USER_FAILURE:
      return {
        ...state,
        userAddMessage: {}
      };

    case GithubConstants.LIST_USER_SUCCESS:
      return {
        ...state,
        users: action.data
      };

    case GithubConstants.LIST_USER_FAILURE:
      return {
        ...state,
        users: []
      };
      

    case GithubConstants.EDIT_USER_SUCCESS:
      return {
        ...state,
        userEditMessage: action.data
      };
  
    case GithubConstants.EDIT_USER_FAILURE:
      return {
        ...state,
        userEditMessage: {}
      };

    case GithubConstants.DELETE_USER_SUCCESS:
      return {
        ...state,
        userDeleteMessage: action.data
      };
  
    case GithubConstants.DELETE_USER_FAILURE:
      return {
        ...state,
        userDeleteMessage: {}
      };

    case GithubConstants.USER_REPOSITORY_SUCCESS:
        return {
          ...state,
          userRepos: action.data
        };
  
    case GithubConstants.USER_REPOSITORY_FAILURE:
      return {
        ...state,
        userRepos: []
      };

    default:
      return state

  }
}