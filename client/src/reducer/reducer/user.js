const initialState = { UserBakiye: 0.00 };
export default function (state = initialState, action) {
    switch (action.type) {
        case "GET_BAKIYE":
            return {
                ...state,
                UserBakiye: action.payload,
            };
        default:
            return state;
    }
}