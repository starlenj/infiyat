import { React, Component } from "react";
import Header from "../components/header_new";
import Footer from "../components/footer";
import socketIOClient from 'socket.io-client';

export default class Home extends Component {
  componentDidMount() {

    let socket = socketIOClient("http://localhost:3000");
    socket.on("GetProductList", (data) => console.log(data));
  }

  render() {
    return (
      <div>
        <Header /> <Footer />
      </div>
    );
  }
}
