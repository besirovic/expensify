import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboard from '../components/ExpenseDashboard';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import NotFound from '../components/NotFound';
import LoginPage from '../components/LoginPage';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <Switch>
            <PublicRoute path="/" component={LoginPage} exact={true} />
            <PrivateRoute path="/dashboard" component={ExpenseDashboard} />
            <PrivateRoute path="/create" component={AddExpense} />
            <PrivateRoute path="/edit/:id" component={EditExpense} />
            <Route component={NotFound} />
        </Switch>
    </Router>
);

export default AppRouter;
