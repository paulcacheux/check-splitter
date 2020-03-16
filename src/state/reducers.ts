import {
    ADD_PERSON,
    ADD_EXPENSE,
    RESET_STATE,
    PeopleState,
    ExpensesState,
    defaultExpensesState,
    REMOVE_EXPENSE,
} from './types';
import { RootAction } from './actions';
import { combineReducers } from 'redux';

const peopleReducer = (state: PeopleState = [], action: RootAction): PeopleState => {
    switch (action.type) {
        case ADD_PERSON:
            const person = { name: action.name, basePrice: action.basePrice };
            return [...state, person];
        case RESET_STATE:
            return [];
        default:
            return state;
    }
};

const expensesReducer = (state: ExpensesState = defaultExpensesState, action: RootAction): ExpensesState => {
    switch (action.type) {
        case ADD_EXPENSE:
            const expense = { id: state.counter, name: action.name, kind: action.kind, payload: action.payload };
            return {
                counter: state.counter + 1,
                expenses: [...state.expenses, expense],
            };
        case REMOVE_EXPENSE:
            return {
                counter: state.counter,
                expenses: state.expenses.filter(expense => expense.id !== action.id),
            };
        case RESET_STATE:
            return defaultExpensesState;
        default:
            return state;
    }
};

export const reducer = combineReducers({
    people: peopleReducer,
    expenses: expensesReducer,
});

export type State = ReturnType<typeof reducer>;
