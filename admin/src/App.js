import { Switch, Route, BrowserRouter } from "react-router-dom";
import SessionWrapperHOC from "./SessionWrapper";
import { Component, Fragment } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
///PAGES
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import User from "./Pages/User";
const Root = ({ refetch, session }) => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={() => <Home session={session} />} />
      <Route exact path="/Login" render={() => <Login />} />
      <Route exact path="/User" render={() => <User session={session} />} />
      <Route
        exact
        path="/User/Logout"
        render={() => {
          localStorage.removeItem("inToken");
          window.location.href = "/Login";
        }}
      />
    </Switch>
  </BrowserRouter>
);

const RootWithSessionWrapper = SessionWrapperHOC(Root);
export default class App extends Component {
  render() {
    return (
      <Fragment>
        <ToastContainer />
        <RootWithSessionWrapper />
      </Fragment>
    );
  }
}
