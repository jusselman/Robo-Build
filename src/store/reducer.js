import * as actionTypes from './actions';

const initialState = {
    parts: {
        ahead: 0,
        arms1: 0,
        arms2: 0,
        arms3: 0,
        legs1: 0
    },
    totalPrice: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PART:
            return {
                ...state,
                parts: {
                    ...state.parts,
                    [action.partName]: state.parts[action.partName] + 1
                }
            };

        case actionTypes.DELETE_PART:
            return {
                ...state,
                parts: {
                    ...state.parts,
                    [action.partName]: state.parts[action.partName] - 1
                }
            };
        default:
            return state;
    }

}

export default reducer;

