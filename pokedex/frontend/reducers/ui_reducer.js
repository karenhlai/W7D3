//modal will go here

function uiReducer(state = {}, action) {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    return state;
}

export default uiReducer;