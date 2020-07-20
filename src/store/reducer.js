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

const PARTS_PRICES = {
    ahead: 100.50,
    arms1: 150.75,
    arms2: 125.25,
    arms3: 175.55,
    legs1: 225.99
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PART:
            return {
                ...state,
                parts: {
                    ...state.parts,
                    [action.partName]: state.parts[action.partName] + 1
                },
                totalPrice: state.totalPrice + PARTS_PRICES[action.partName]
            };

        case actionTypes.DELETE_PART:
            return {
                ...state,
                parts: {
                    ...state.parts,
                    [action.partName]: state.parts[action.partName] - 1
                },
                totalPrice: state.totalPrice - PARTS_PRICES[action.partName]
            };
        default:
            return state;
    }

}

export default reducer;

