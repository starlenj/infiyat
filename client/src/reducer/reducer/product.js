const initialState = { Products: [], FiyatList: [] };
export default function (state = initialState, action) {
    switch (action.type) {
        case "SET_PRODUCTS":
            return {
                ...state,
                Products: action.payload,
            };
        case "GET_FIYAT_LIST":
            return {
                ...state,
                FiyatList: action.payload
            }
        default:
            return state;
    }
}