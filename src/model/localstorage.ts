import { State } from '../state/reducers';
import { stateVersion } from '../state/types';

const LOCAL_STORAGE_KEY = 'check-splitter-state';

export const loadState = (key = LOCAL_STORAGE_KEY): State | null => {
    try {
        const item = window.localStorage.getItem(key);
        if (!item) {
            return null;
        }

        const payload = item ? JSON.parse(item) : null;
        if ('version' in payload && payload.version === stateVersion) {
            return payload.state;
        } else {
            return null;
        }
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const storeState = (state: State, key = LOCAL_STORAGE_KEY): void => {
    const payload = {
        version: stateVersion,
        state,
    };
    try {
        window.localStorage.setItem(key, JSON.stringify(payload));
    } catch (error) {
        console.error(error);
    }
};
