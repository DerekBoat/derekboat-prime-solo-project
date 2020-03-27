const postIdReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_ID':
            return action.payload;
        case 'UNSET_ID':
            return {};
        default:
            return state;
    }
};

export default postIdReducer;