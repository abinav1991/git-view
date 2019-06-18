import React from 'react';
import Loadable from 'react-loadable'

import { DefaultLayout } from './containers';

function Loading() {
  return <div>Loading...</div>;
}

const Dashboard = Loadable({
  loader: () => import('./Components/Dashboard/Dashboard'),
  loading: Loading,
});

const Users = Loadable({
  loader: () => import('./Components/Users/Users'),
  loading: Loading,
});

const UserRepository = Loadable({
  loader: () => import('./Components/UserRepository/UserRepository'),
  loading: Loading,
});

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard, exact: true },
  { path: '/users', name: 'Users', component: Users, exact: true },
  { path: '/users/:user/user-repository', name: 'UserRepository', component: UserRepository, exact: true }
];

export default routes;
