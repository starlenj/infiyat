const initialState = { UserBakiye: 0.00, User: [] };
export default function (state = initialState, action) {
    switch (action.type) {
        case "GET_BAKIYE":
            return {
                ...state,
                UserBakiye: action.payload,
            };
        case "SET_USER":
            return {
                ...state,
                User: action.payload
            }
        default:
            return state;
    }
}