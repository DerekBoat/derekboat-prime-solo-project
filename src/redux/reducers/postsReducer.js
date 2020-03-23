const postsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_POSTS':
            return action.payload;
        case 'UNSET_POSTS':
            return {};
        default:
            return state;
    }
};

export default postsReducer;