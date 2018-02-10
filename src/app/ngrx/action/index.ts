import {Action} from '@ngrx/store';

export const NAVGB = 'NAVGB';
export const NONAVGB = 'NONAVGB';

export function counterReducer(state: boolean = false, action: Action) {
    switch (action.type) {
        case NAVGB:
            return true;
        case NONAVGB:
            return false;
        default:
            return state;
    }
}
