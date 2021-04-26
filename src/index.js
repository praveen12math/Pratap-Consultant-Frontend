import React from "react";
import ReactDOM from "react-dom";
import Home from "./component/pages/Home";
import Aboutus from "./component/pages/Aboutus";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./component/layout/Header";
import Services from "./component/pages/Services";
import Login from "./component/pages/Login";
import PageNotFound from "./component/pages/PageNotFound";
import "materialize-css/dist/css/materialize.min.css";
import "./index.css";
import Admin from "./component/pages/Admin";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/aboutus" component={Aboutus} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/admin" component={Admin} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
