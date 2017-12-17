import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// Add expense
const addExpense = (
    { 
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0 
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = ( { id } = {} ) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// Expenses Reducer


// Filter reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined, 
    endDate: undefined
};


const filtersReducer = (state = filtersReducerDefaultState, action) => {

    switch (action.type) {

        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
            break;

        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
            break;

        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
            break;

        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.date
            }
            break;
        
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.date
            };
            break;

        default:
            return state;
            break;
    }

}



const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpense(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseTwo = store.dispatch(addExpense({
    description: 'Coffe',
    amount: 300,
    createdAt: -1000
}));

const expenseOne = store.dispatch(addExpense({
    description: 'Rent',
    amount: 100,
    createdAt: 1000
}));

/* 
store.dispatch(removeExpense({
    id: expenseOne.expense.id
}));

store.dispatch(editExpense(expenseTwo.expense.id, {
    amount: 500
}));

store.dispatch(sortByDate());

store.dispatch(setTextFilter());

*/
//store.dispatch(setTextFilter('ent'));
//store.dispatch(setStartDate(0));
//store.dispatch(setEndDate(1250));

store.dispatch(sortByAmount());