import React from 'react';

import ExpenseList from './ExpenseList';
import ExpensesSummary from './ExpensessSummary';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboard = (props) => {
    return (
        <div>
            <ExpensesSummary />
            <hr />
            <ExpenseListFilters />
            <hr />
            <ExpenseList />
        </div>
    );
};

export default ExpenseDashboard;