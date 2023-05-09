import { lazy } from "react";


export const ActiveUsers = lazy(() => import("./activeUsers/activeUsers"));
export const Archive = lazy(() => import("./archive/archive"));
export const CanceledRequests = lazy(() => import("./canceledRequests/canceledRequests"));
export const Contact = lazy(() => import("./contact/contact"));
export const ContactResponse = lazy(() => import("./contact/contactResponse"));
export const ActiveProducts = lazy(() => import("./pruducts/activeProduct"));
export const DisActiveProducts = lazy(() => import("./pruducts/DisActiveProducts"));
export const Baner = lazy(() => import("./carusel/Baner"));
export const Carusel = lazy(() => import("./carusel/carusel"));
export const NonActiveUsers = lazy(() => import("./nonActiveUsers/nonActiveUsers"));
export const Orders = lazy(() => import("./orders/orders"));
export const Requests = lazy(() => import("./requests/requests"));
export const Category = lazy(() => import("./category/category"));
export const Width = lazy(() => import("./mesure/width"));
export const Length = lazy(() => import("./mesure/length"));
export const Material = lazy(() => import("./mesure/material"));
export const Color = lazy(() => import("./mesure/color"));
export const NotFound = lazy(() => import("./404/404"));
export const Login = lazy(() => import("./login/login"));




