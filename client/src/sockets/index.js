import { React, Component } from 'react';
import socketIOClient from 'socket.io-client';

export default class Socket extends Component {

    componentDidMount() {
        const socket = socketIOClient("http://localhost:3000");
        socket.on("ConnectedApi", data => {
            console.log(data);
        })
    }
    render() {
        return (<div>TEST</div>)
    }
}