import { combineReducers } from "redux";

import Product from "./reducer/product.js";
import Socket from "./reducer/socket.js";
import User from "./reducer/user.js";

const Reducers = combineReducers({
    Product,
    User,
    Socket,
});
export default Reducers;
