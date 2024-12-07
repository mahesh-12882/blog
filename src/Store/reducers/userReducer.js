
let initialState = {
    data: [],
    loading: false,
    error: null
}


export const userReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case "PENDING":
            return { ...state, data: action.payload, loading: true, error: null }
            break;
        case "SUCCESS":
            return { ...state, data: action.payload, loading: false, error: null }
            break;
        case "FAIL":
            return { ...state,data:[], loading: false, error: action.payload }
            break;
        default:
            return state;
    }
}