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
const PromotionDetail = lazy(() =>
  import("./components/PromotionDetail/PromotionDetail.js")
);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <PromotionsProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path={process.env.PUBLIC_URL +  "/createpromotion/"} component={CreatePromotion} />
            <Route exact path={process.env.PUBLIC_URL + "/promotions/"} component={PromotionsList} />
            <Route exact path={process.env.PUBLIC_URL + "/promotion/:year"} component={PromotionDetail} />
            <Route path={process.env.PUBLIC_URL + "/"} component={Landing} />
          </Switch>
        </BrowserRouter>
      </PromotionsProvider>
    </Suspense>
  );
}


export default App;
