import { combineReducers } from "redux";

import Product from "./reducer/product.js";
import Socket from "./reducer/socket.js";

const Reducers = combineReducers({
    Product,
    Socket,
});
export default Reducers;
