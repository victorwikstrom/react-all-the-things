import React, { Fragment, lazy, Suspense } from "react";
import MasterView from "./masterView";
import { Route } from "react-router-dom";

const DetailView = lazy(() => import("./detailView"));

/** React function component */
export default function ViewContainer() {
  const detailViews = ["forest", "sky", "desert"];

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Route
        exact
        path="/"
        render={() => <MasterView detailViews={detailViews} />}
      />
      <Route path="/forest" component={DetailView} />
      <Route path="/sky" component={DetailView} />
      <Route path="/desert" component={DetailView} />
    </Suspense>
  );
}
