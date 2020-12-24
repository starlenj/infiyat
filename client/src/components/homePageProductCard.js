import { React, Component } from 'react';
import socketIOClient from 'socket.io-client';

export default class HomePageProductCard extends Component {

    componentDidMount() {
        let socketIo = socketIOClient("http://localhost:3000");
        socketIo.on("GetProductList", (data) => console.log(data));
    }
    render() {
        return <div>PRoductList</div>
    }
}