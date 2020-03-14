import { State } from '../state/types';

const LOCAL_STORAGE_KEY = 'check-splitter-state';

export const loadState = (key = LOCAL_STORAGE_KEY): State | null => {
    try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const storeState = (state: State, key = LOCAL_STORAGE_KEY): void => {
    try {
        window.localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
        console.error(error);
    }
};
