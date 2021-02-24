import React from "react";
import DetailView from "./DetailView";
import MasterView from "./MasterView";
import { Route, Switch } from "react-router-dom";

function ViewContainer() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <MasterView />
        </Route>
        <Route path="/:name" component={DetailView} />
        <h2>Du har besökt en sida som inte finns</h2>
      </Switch>
    </div>
  );
}

export default ViewContainer;
