import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import CourseDetail from "./components/CourseDetail";
import MyDashboard from "./components/MyDashboard";
import { Provider } from "react-redux";
import appStore from "./utils/redux/appStore";

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <>
        <Header />
        <Outlet />
      </>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/course/:courseId",
        element: <CourseDetail />,
      },
      {
        path: "/dashboard",
        element: <MyDashboard />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
