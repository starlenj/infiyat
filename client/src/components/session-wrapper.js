import axios from "axios";
import socketIOClient from 'socket.io-client';

const SessionWrapper = (Component) => (props) => {
  var socket = socketIOClient("http://localhost:3000");
  /*Önce Token varmı bakılacak daha sonra token valid et ondan sonra duruma göre
  rediret et
    */
  var path = window.location.pathname.split("/");
  var Session;
  let SessionResponse = axios.post(
    "http://91.102.164.214:3000/Api/V1/ValidToken",
    {
      token: localStorage.getItem("inToken"),
    }
  );
  Session = SessionResponse;
  return <Component socket={socket} {...props} session={Session} />;
};

export default SessionWrapper;
