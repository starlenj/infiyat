import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import SessionWrapperHOC from "./components/session-wrapper";
import { Component, Fragment } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
///PAGES
import Home from "./pages/home";
import Profile from "./pages/User/Profile";
import Kredi from "./pages/User/Kredi";
import Siparis from "./pages/User/Siparis";
import Odeme from "./pages/User/Odeme";
import Adreslerim from "./pages/User/Adreslerim";

const Root = ({ refetch, session, socket }) => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/"
        render={() => <Home session={session} socket={socket} />}
      />
      <Route
        exact
        path="/Logout"
        component={() => {
          localStorage.removeItem("inToken");
          window.location.href = "/";
        }}
      />
      <Route
        exact
        path="/Profile"
        render={() => <Profile session={session} socket={socket} />}
      />
      <Route
        exact
        path="/Kredi"
        render={() => <Kredi session={session} socket={socket} />}
      />
      <Route
        exact
        path="/Siparislerim"
        render={() => <Siparis session={session} socket={socket} />}
      />
      <Route
        exact
        path="/Odeme"
        render={() => <Odeme session={session} socket={socket} />}
      />
      <Route
        exact
        path="/Adreslerim"
        render={() => <Adreslerim session={session} socket={socket} />}
      />
      <Redirect to="/" />
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
