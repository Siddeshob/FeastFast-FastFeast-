import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/utils/About";
import Contact from "./components/utils/Contact";
import Error from "./components/utils/Error";
import RestaurantMenu from "./components/utils/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./components/utils/AppStore";
import Cart from "./components/utils/Cart";
// import Grocery from "./components/Grocery";

//-------------------------------------------------------------------------------------------

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  return (
    <div>
      <Provider store={appStore}>
        <Header />
        <Outlet />
        {/* <Body /> */}
      </Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>loodeing....</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/home",
        element: (
          <Suspense fallback={<h1>loodeing....</h1>}>
            <Body />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: (
          <Suspense fallback={<h1>loodeing....</h1>}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>loodeing....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path:"/cart",
        element:(
            <Cart/>
        )
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
