import React from "react";
import { Header } from "./components/";
import { Home, Cart } from "./pages/index";
import { Route } from "react-router-dom";

export const App = () => {
  return (
    <div className="wrapper">
        <Route path={"/"} render={()=><Header/>} />
      <div className="content">
        <Route exact path={"/"} render={()=><Home/>} />
        <Route exact path={"/cart/"} component={Cart} />
      </div>
    </div>
  );
};
