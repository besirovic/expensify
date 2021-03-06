import React from 'react';
import { connect } from 'react-redux';

import { startAddExpense } from '../actions/expenses';

import ExpenseForm from './ExpenseForm';

export class AddExpense extends React.Component {

    onSubmit = (expense) => {
        //props.dispatch(addExpense(expense));
        this.props.startAddExpense(expense);
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <h1>Add expense</h1>
                <ExpenseForm 
                    onSubmit={this.onSubmit}
                    />
            </div>
        );
    }

}

const mapDispatchToProps = (dispatch) => ({
    startAddExpense: expense => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpense);