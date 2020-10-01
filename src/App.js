import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loader from "./components/Loader";

const Landing = lazy(() => import("./components/Landing/Landing.js"));
const CreatePromotion = lazy(() => import("./components/CreatePromotion/CreatePromotion.js"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/createpromotion/" component={CreatePromotion} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
