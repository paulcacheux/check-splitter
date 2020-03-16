import { State } from './reducers';
import { Person, Expense } from './types';

export const peopleSelector = (state: State): Array<Person> => {
    return state.people;
};

export const expensesSelector = (state: State): Array<Expense> => {
    return state.expenses;
};
