const initialState = { Socketid: "" };
export default function (state = initialState, action) {
    switch (action.type) {
        case "SET_MY_ID":
            return {
                ...state,
                Socketid: action.payload,
            };
        default:
            return state;
    }
}