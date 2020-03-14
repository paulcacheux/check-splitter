import { ADD_PERSON, ADD_EXPENSE, Person, Expense, RESET_STATE } from './types';

export interface ResetAction {
    type: typeof RESET_STATE;
}

export interface AddPersonAction {
    type: typeof ADD_PERSON;
    person: Person;
}

export interface AddExpenseAction {
    type: typeof ADD_EXPENSE;
    expense: Expense;
}

export type RootAction = ResetAction | AddPersonAction | AddExpenseAction;

export const resetState = (): ResetAction => {
    return {
        type: RESET_STATE,
    };
};

export const addPerson = (person: Person): AddPersonAction => {
    return {
        type: ADD_PERSON,
        person,
    };
};

export const addExpense = (expense: Expense): AddExpenseAction => {
    return {
        type: ADD_EXPENSE,
        expense,
    };
};
