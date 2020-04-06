import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopePage from "./pages/shop/shop-page.component";
import "./app.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopePage} />
      </Switch>
    </div>
  );
}

export default App;
