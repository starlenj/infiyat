import { Switch, Route, BrowserRouter } from "react-router-dom";
import SessionWrapperHOC from "./components/session-wrapper";
import { Component, Fragment } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
///PAGES
import Home from "./pages/home";
import Socket from "./sockets/index";

const Root = ({ refetch, session }) => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={() => <Home session={session} />} />
      <Route exact path="/test" render={() => <Socket session={session} />} />
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
