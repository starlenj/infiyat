import { React, Component } from "react";
import Header from "../components/header_new";
import Footer from "../components/footer";
import socketIOClient from 'socket.io-client';
import HomePageProductCard from "../components/homePageProductCard";

export default class Home extends Component {

  render() {
    return (
      <div>
        <Header /> <Footer />
        <HomePageProductCard />
      </div>
    );
  }
}
