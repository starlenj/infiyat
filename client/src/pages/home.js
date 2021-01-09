import { React, Component } from "react";
import Header from "../components/header_new";
import Footer from "../components/footer";
import { SetSocketId } from '../reducer/actions/socket_action'
import { connect } from 'react-redux';
class Home extends Component {
  componentDidMount() {
    this.props.socket.on("your id", (data) => this.props.SetSocketId(data));
    this.props.socket.on("toplam_kullanici", (data) => console.log(data));
  }
  render() {
    return (
      <div>
        <Header socket={this.props.socket} session={this.props.session} /> <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({ Socketid }) => {
  return {
    Socketid,
  };
};
const mapDispatchToProps = {
  SetSocketId,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);



