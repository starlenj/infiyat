import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { SetActiveUser } from "./Redux/Action/User";

const SessionWrapper = (Component) => (props) => {
  /*Önce Token varmı bakılacak daha sonra token valid et ondan sonra duruma göre
  rediret et
    */
  var path = window.location.pathname.split("/");
  var Session = [];
  if (localStorage.getItem("inToken") === null && path[1] !== "Login") {
    window.location.href = "/Login";
  }
  //TOKEN VALID
  axios
    .post("http://localhost:3000/Api/V1/ValidToken", {
      token: localStorage.getItem("inToken"),
    })
    .then((response) => {
      Session.push(response.data.data.data[0]);
    })
    .catch((error) => {
      if (localStorage.getItem("inToken") === null && path[1] !== "Login") {
        window.location.href = "/Login";
      }
    });
  return <Component {...props} session={Session} />;
};

export default SessionWrapper;
