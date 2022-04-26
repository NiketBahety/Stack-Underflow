const questionsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ASK_QUESTION':
            return state;

        case 'GET_QUESTIONS':
            return action.data;

        case 'ANSWER_QUESTION':
            return action.res;

        case 'DELETE_QUESTION':
            return action.res;

        case 'DELETE_ANSWER':
            return action.res;

        case 'VOTE':
            return action.res;

        default:
            return state;
    }
};

export default questionsReducer;
