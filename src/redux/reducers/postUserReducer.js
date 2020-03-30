const postUserReducer = (state = {}, action) => {
    switch (action.type) {
        case 'POST_USERNAME':
            return action.payload;
        case 'UNSET_POST_USERNAME':
            return {};
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.user
export default postUserReducer;