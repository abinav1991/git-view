import axios from "axios";
import { gitClientId, gitClientSecret, apiEndPoint } from '../helpers'
import Promise from "bluebird";
import _ from "lodash";

/* eslint eqeqeq: 0 */
export const GithubService = {
  searchUserNames,
  addUser,
  getUsers,
  editUser,
  deleteUser,
  getUserRepository
};

function searchUserNames(search) {
  let url = apiEndPoint + `/search/users?q=user:${search}&per_page=10&page=1&client_id=${gitClientId}&client_secret=${gitClientSecret}`;
  return new Promise(function (resolve, reject) {
    axios({
      url: url,
      method: 'GET'
    }).then(function(response) {
      resolve(response.data);
    }, function(error) {
      console.error(error);
      reject(error || error.message)
    })
  });
}

function addUser(user) {
  return new Promise(function (resolve, reject) {
    let users = JSON.parse(localStorage.getItem('users'));
    if(users){
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
    }else{
      localStorage.setItem('users', JSON.stringify([user]));
    }
    if(JSON.parse(localStorage.getItem('users'))){
      resolve({message: 'user added successfully'});
    }else{
      reject('not able to add user!');
    }
  });
}

function getUsers() {
  return new Promise(function (resolve, reject) {
    let users = JSON.parse(localStorage.getItem('users'));
    if(users){
      resolve(users);
    }else{
      reject('not able to fetch users!');
    }
  });
}

function editUser(userId, user){
  return new Promise(function (resolve, reject) {
    let users = JSON.parse(localStorage.getItem('users'));
    var userIndex = _.findIndex(users, function(o) { return o.id === userId });
    if(userIndex >= 0){
      delete user.isEditing;
      users[userIndex] = user;
      localStorage.setItem('users', JSON.stringify(users));
      resolve({message: 'user edited successfully'});
    }else{
      reject('cannot edit user!');
    }
  });
}

function deleteUser(userId){
  return new Promise(function (resolve, reject) {
    let users = JSON.parse(localStorage.getItem('users'));
    var userIndex = _.findIndex(users, function(o) { return o.id === userId });
    if(userIndex >= 0){
      users.splice(userIndex, 1);
      localStorage.setItem('users', JSON.stringify(users));
      resolve({message: 'user deleted successfully'});
    }else{
      reject('cannot find user!');
    }
  });
}

function getUserRepository(username) {
  let url = apiEndPoint + `/users/${username}/repos?client_id=${gitClientId}&client_secret=${gitClientSecret}`;
  return new Promise(function (resolve, reject) {
    axios({
      url: url,
      method: 'GET'
    }).then(function(response) {
      resolve(response.data);
    }, function(error) {
      console.error(error);
      reject(error || error.message)
    })
  });
}