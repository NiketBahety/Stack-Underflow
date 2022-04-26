const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_ALL_USERS':
            return action.users;

        case 'GET_USER':
            return action.user;

        default:
            return state;
    }
};

export default userReducer;
