const editPost = (state = {}, action) => {
    switch (action.type) {
        case 'EDIT_POST':
            return action.payload;
        case 'UNEDIT_POST':
            return {};
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.user
export default editPost;