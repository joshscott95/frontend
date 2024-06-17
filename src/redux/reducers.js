import { combineReducers } from 'redux';
import { UPDATE_FEATURES } from './actions';

const featuresReducer = (state = [], action) => {
    switch (action.type) {
        case UPDATE_FEATURES:
            return action.payload;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    features: featuresReducer
});

export default rootReducer;
