import { ADD_PERSON, ADD_EXPENSE, RESET_STATE, PeopleState, ExpensesState, Person, Expense } from './types';
import { RootAction } from './actions';
import { combineReducers } from 'redux';

const peopleReducer = (state: Array<Person> = [], action: RootAction): PeopleState => {
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

const expensesReducer = (state: Array<Expense> = [], action: RootAction): ExpensesState => {
    switch (action.type) {
        case ADD_EXPENSE:
            const expense = { name: action.name, kind: action.kind, payload: action.payload };
            return [...state, expense];

        case RESET_STATE:
            return [];

        default:
            return state;
    }
};

export const reducer = combineReducers({
    people: peopleReducer,
    expenses: expensesReducer,
});

export type State = ReturnType<typeof reducer>;
