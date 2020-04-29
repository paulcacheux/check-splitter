import {
    ADD_PERSON,
    ADD_EXPENSE,
    RESET_STATE,
    PeopleState,
    ExpensesState,
    defaultExpensesState,
    REMOVE_EXPENSE,
    EDIT_PERSON,
} from './types';
import { RootAction } from './actions';
import { convertToCents } from './utils';
import { combineReducers } from 'redux';
import { ExpenseKind } from '../expenseKind';

const peopleReducer = (state: PeopleState = [], action: RootAction): PeopleState => {
    switch (action.type) {
        case ADD_PERSON:
            const person = { name: action.name, basePrice: convertToCents(action.basePrice) };
            return [...state, person];
        case EDIT_PERSON:
            return state.map((person, index) => {
                if (index === action.editId) {
                    return { ...person, basePrice: convertToCents(action.newBasePrice) };
                } else {
                    return person;
                }
            });
        case RESET_STATE:
            return [];
        default:
            return state;
    }
};

const expensesReducer = (state: ExpensesState = defaultExpensesState, action: RootAction): ExpensesState => {
    switch (action.type) {
        case ADD_EXPENSE:
            const payload = action.kind === ExpenseKind.Percentage ? action.payload : convertToCents(action.payload);
            const expense = {
                id: state.counter,
                name: action.name,
                kind: action.kind,
                payload,
            };
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
