import axios from "axios";
import socketIOClient from "socket.io-client";

function GetToken() {

  return axios.post("http://localhost:4000/Api/V1/ValidToken", {
    token: localStorage.getItem("inToken"),
  }).then((response) => {

    return response
  })
}
var socket = null;
const SessionWrapper = (Component) => (props) => {
  if (socket === null) socket = socketIOClient("http://localhost:4000");
  /*Önce Token varmı bakılacak daha sonra token valid et ondan sonra duruma göre
  rediret et
    */

  let Session = [];
  let SessionResponse = GetToken()
  return <Component socket={socket} {...props} session={SessionResponse} />;
};



export default SessionWrapper;