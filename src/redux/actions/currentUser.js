export const setCurrentUser = (data) => {
    return {
        type: 'FECTH_CURRENT_USER',
        payload: data,
    };
};
