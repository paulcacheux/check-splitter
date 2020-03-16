import { ExpenseKind } from '../expenseKind';

export const RESET_STATE = 'RESET_STATE';
export const ADD_PERSON = 'ADD_PERSON';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';

// Last changed when adding ids to expenses
export const stateVersion = 1;

export interface Person {
    name: string;
    basePrice: number;
}

export interface Expense {
    id: number;
    name: string;
    payload: number;
    kind: ExpenseKind;
}

export type PeopleState = Array<Person>;

export interface ExpensesState {
    counter: number;
    expenses: Array<Expense>;
}

export const defaultExpensesState: ExpensesState = {
    counter: 0,
    expenses: [],
};
