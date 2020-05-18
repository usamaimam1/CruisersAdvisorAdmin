const initialState = {
    authState: null
}
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_AUTH_STATE":
            return Object.assign({}, state, { authState: action.payload.authState })
        default:
            return state
    }
}