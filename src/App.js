import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loader from "./components/Loader";
import { PromotionsProvider } from "./contexts/PromotionsContext.js";

const Landing = lazy(() => import("./components/Landing/Landing.js"));
const CreatePromotion = lazy(() =>
  import("./components/CreatePromotion/CreatePromotion.js")
);
const PromotionsList = lazy(() =>
  import("./components/PromotionsList/PromotionsList.js")
);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <PromotionsProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/createpromotion/" component={CreatePromotion} />
            <Route exact path="/promotions/" component={PromotionsList} />
          </Switch>
        </BrowserRouter>
      </PromotionsProvider>
    </Suspense>
  );
}

export default App;
