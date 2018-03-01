import {Action} from '@ngrx/store';
import * as Type from '../action/index';
import {stateManage, initialState} from '../model/index';

export function counterReducer(state: stateManage = initialState, action: Action) {
    switch (action.type) {
        case Type.NAV:
            return Object.assign({}, state, {
                nav: action.
            });
        default:
            return state;
    }
}



