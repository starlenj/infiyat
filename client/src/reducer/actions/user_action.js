export function GetBakiye(bakiye) {
    return (dispatch) => {
        dispatch({
            type: "GET_BAKIYE",
            payload: bakiye,
        });
    };
}
export function GetFiyatList(data) {
    return (dispatch) => {
        dispatch({
            type: "GET_FIYAT_LIST",
            payload: data,
        });
    };
}
