import { createBrowserRouter, Navigate } from "react-router-dom";
import { ErrorPage } from "./ErrorPage";
import { Login } from "../views/Login";
import { Home } from "../views/Home";
import { Rate } from "../views/Rate"
import { Signup } from "../views/Signup"

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Navigate to="/Login" />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/Login",
		element: <Login />,
	},
	{
		path: "/Home",
		element: <Home />,
	},
	{
		path: "/Rate",
		element: <Rate />,
	},
	{
		path: "/Signup",
		element: <Signup />,
	},
]);
