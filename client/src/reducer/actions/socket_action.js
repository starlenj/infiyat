export function SetSocketId(id) {
    return (dispatch) => {
        dispatch({
            type: "SET_MY_ID",
            payload: id,
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
