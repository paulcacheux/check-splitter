import { State, ADD_PERSON, ADD_EXPENSE, RESET_STATE } from './types';
import { RootAction } from './actions';

const defaultState: State = {
    people: [],
    expenses: [],
};

export const reducer = (state = defaultState, action: RootAction): State => {
    switch (action.type) {
        case ADD_PERSON:
            return { ...state, people: [...state.people, action.person] };

        case ADD_EXPENSE:
            return { ...state, expenses: [...state.expenses, action.expense] };

        case RESET_STATE:
            return { ...defaultState };

        default:
            return state;
    }
};
