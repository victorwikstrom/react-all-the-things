import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router } from "react-router-dom";
const Layout = lazy(() => import("./Layout"));

/**
 * Application top level component. This is a good place for future
 * top level components - ErrorBoundary, Provider & Suspense, etc.
 */
export default function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Layout />
      </Suspense>
    </Router>
  );
}
