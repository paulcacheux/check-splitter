import { ADD_PERSON, ADD_EXPENSE, RESET_STATE } from './types';
import { ExpenseKind } from '../expenseKind';

export interface ResetAction {
    type: typeof RESET_STATE;
}

export interface AddPersonAction {
    type: typeof ADD_PERSON;
    name: string;
    basePrice: number;
}

export interface AddExpenseAction {
    type: typeof ADD_EXPENSE;
    name: string;
    kind: ExpenseKind;
    payload: number;
}

export type RootAction = ResetAction | AddPersonAction | AddExpenseAction;

export const resetState = (): ResetAction => {
    return {
        type: RESET_STATE,
    };
};

export const addPerson = (name: string, basePrice: number): AddPersonAction => {
    return {
        type: ADD_PERSON,
        name,
        basePrice,
    };
};

export const addExpense = (name: string, kind: ExpenseKind, payload: number): AddExpenseAction => {
    return {
        type: ADD_EXPENSE,
        name,
        kind,
        payload,
    };
};
