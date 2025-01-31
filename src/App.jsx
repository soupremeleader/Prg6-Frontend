import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import { useState, useEffect } from "react";
import DetailProject from "./pages/DetailProject.jsx";
import AddProject from "./components/AddProject.jsx";
import Projects from "./pages/Projects.jsx";
import EditProject from "./pages/EditProject.jsx";
import DeleteProject from "./pages/DeleteProject";

const router = createBrowserRouter([
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/add_project",
    element: <AddProject />,
  },

  {
    path: "/projects/:id",
    element: <DetailProject />,
  },
  {
    path: "/edit_project/:id",
    element: <EditProject />,
  },
  {
    path: "delete_project/:id",
    element: <DeleteProject />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
