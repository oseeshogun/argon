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
const StudentDetail = lazy(() => 
  import("./components/PromotionDetail/components/StudentDetail.js")
);
const Login = lazy(() => 
  import("./components/Auth/Login.js")
);
const Signup = lazy(() => 
  import("./components/Auth/Signup.js")
);
const Profil = lazy(() => 
  import("./components/Profil/Profil.js")
);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <PromotionsProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path={process.env.PUBLIC_URL +  "/createpromotion/"} component={CreatePromotion} />
            <Route exact path={process.env.PUBLIC_URL + "/promotions/"} component={PromotionsList} />
            <Route exact path={process.env.PUBLIC_URL + "/signup/"} component={Signup} />
            <Route exact path={process.env.PUBLIC_URL + "/signin/"} component={Login} />
            <Route exact path={process.env.PUBLIC_URL + "/profil/"} component={Profil} />
            <Route exact path={process.env.PUBLIC_URL + "/promotion/:year"} component={PromotionDetail} />
            <Route exact path={process.env.PUBLIC_URL + "/student/:year/:name"} component={StudentDetail} />
            <Route path={process.env.PUBLIC_URL + "/"} component={Landing} />
          </Switch>
        </BrowserRouter>
      </PromotionsProvider>
    </Suspense>
  );
}


export default App;
