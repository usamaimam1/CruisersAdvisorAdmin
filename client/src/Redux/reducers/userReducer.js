const initialState = {
    user: null
}
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER":
            return Object.assign({}, state, { user: action.payload.user })
        default:
            return state
    }
}