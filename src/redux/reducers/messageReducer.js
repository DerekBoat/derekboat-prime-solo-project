const messageReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_MESSAGES':
            return action.payload;
        case 'UNSET_MESSAGES':
            return {};
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.user
export default messageReducer;
