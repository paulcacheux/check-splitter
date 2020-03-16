import { ExpenseKind } from '../expenseKind';

export const RESET_STATE = 'RESET_STATE';
export const ADD_PERSON = 'ADD_PERSON';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export interface Person {
    name: string;
    basePrice: number;
}

export interface Expense {
    name: string;
    payload: number;
    kind: ExpenseKind;
}

export type PeopleState = Array<Person>;
export type ExpensesState = Array<Expense>;
