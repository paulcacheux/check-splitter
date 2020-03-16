import { State, ADD_PERSON, ADD_EXPENSE, RESET_STATE } from './types';
import { RootAction } from './actions';

const defaultState: State = {
    people: [],
    expenses: [],
};

export const reducer = (state = defaultState, action: RootAction): State => {
    switch (action.type) {
        case ADD_PERSON:
            const person = { name: action.name, basePrice: action.basePrice };
            return { ...state, people: [...state.people, person] };

        case ADD_EXPENSE:
            const expense = { name: action.name, kind: action.kind, payload: action.payload };
            return { ...state, expenses: [...state.expenses, expense] };

        case RESET_STATE:
            return { ...defaultState };

        default:
            return state;
    }
};
