import { React, Component } from "react";
import Header from "../components/header_new";
import Footer from "../components/footer";

export default class Home extends Component {

  render() {
    return (
      <div>
        <Header socket={this.props.socket} /> <Footer />
      </div>
    );
  }
}
