import axios from "axios";
import socketIOClient from "socket.io-client";
import { shallowEqual, useSelector } from 'react-redux'


var socket = null;
const SessionWrapper = (Component) => (props) => {
  if (socket === null) socket = socketIOClient("http://localhost:4000");
  /*Önce Token varmı bakılacak daha sonra token valid et ondan sonra duruma göre
  rediret et
    */
  var Session;
  let SessionResponse = axios.post("http://localhost:4000/Api/V1/ValidToken", {
    token: localStorage.getItem("inToken"),
  });

  Session = SessionResponse;
  return <Component socket={socket} {...props} session={Session} />;
};



export default SessionWrapper;