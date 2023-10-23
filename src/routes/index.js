import { createBrowserRouter, Navigate } from "react-router-dom";
import { ErrorPage } from "./ErrorPage";
import { Login } from "../views/Login";

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
]);
