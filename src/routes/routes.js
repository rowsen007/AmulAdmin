import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import {
    ActiveUsers,
    Archive,
    CanceledRequests,
    Contact,
    News,
    NonActiveUsers,
    Orders,
    Requests,
    NotFound,
    Category,
    Login,
    ActiveProducts,
    DisActiveProducts,
    ContactResponse,
    Baner,
    Carusel,
    Width,
    Length,
    Material,
    Color
} from "../pages/index";
import ScrollIntoView from "./ScrollIntoView";
import Loading from "../components/loading";
const PrivateRoute = lazy(() => import("./PrivateRoute"));

const App = () => {
    return (
        <BrowserRouter>
            <ScrollIntoView>
                <Suspense fallback={<Loading />}>
                    <Switch>
                        <PrivateRoute
                            restricted={false}
                            component={ActiveUsers}
                            path="/ActiveUsers"
                            exact
                        />
                        <PrivateRoute
                            restricted={false}
                            component={NonActiveUsers}
                            path="/DisActiveUsers"
                            exact
                        />

                        <PrivateRoute
                            restricted={false}
                            component={Archive}
                            path="/archive"
                            exact
                        />

                        <PrivateRoute
                            restricted={false}
                            component={CanceledRequests}
                            path="/canceledRequests"
                            exact
                        />

                        <PrivateRoute
                            restricted={false}
                            component={Contact}
                            path="/posts"
                            exact
                        />
                        <PrivateRoute
                            restricted={false}
                            component={ContactResponse}
                            path="/sendPost"
                            exact
                        />
                        <PrivateRoute
                            restricted={false}
                            component={Contact}
                            path="/notifications"
                            exact
                        />
                        <PrivateRoute
                            restricted={false}
                            component={ActiveProducts}
                            path="/ActiveProducts"
                            exact
                        />
                        <PrivateRoute
                            restricted={false}
                            component={DisActiveProducts}
                            path="/DisActiveProducts"
                            exact
                        />
                        <PrivateRoute
                            restricted={false}
                            component={Baner}
                            path="/baner"
                            exact
                        />
                        <PrivateRoute
                            restricted={false}
                            component={Carusel}
                            path="/carusel"
                            exact
                        />

                        <PrivateRoute
                            restricted={false}
                            component={NonActiveUsers}
                            path="/nonActiveUsers"
                            exact
                        />

                        <PrivateRoute
                            restricted={false}
                            component={Orders}
                            path="/orders"
                            exact
                        />

                        <PrivateRoute
                            restricted={false}
                            component={Requests}
                            path="/requests"
                            exact
                        />

                        <PrivateRoute
                            restricted={false}
                            component={Category}
                            path="/category"
                            exact
                        />

                        <PrivateRoute
                            restricted={false}
                            component={Width}
                            path="/Width"
                            exact
                        />

                        <PrivateRoute
                            restricted={false}
                            component={Length}
                            path="/length"
                            exact
                        />

                        <PrivateRoute
                            restricted={false}
                            component={Material}
                            path="/material"
                            exact
                        />

                        <PrivateRoute
                            restricted={false}
                            component={Color}
                            path="/color"
                            exact
                        />

                        <Route component={Login} path="/login" exact />

                        <Route path="/" component={Login} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </Suspense>
            </ScrollIntoView>
        </BrowserRouter>
    );
};

export default App;
