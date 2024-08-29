import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./Pages/Root";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Documents from "./Pages/Documents";
import JoinUs from "./Pages/JoinUs";
import ResearchesAndStudys from "./Pages/ResearchesAndStudys";
import SaidAboutUs from "./Pages/SaidAboutUs";
import Auth from "./Pages/Auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/AboutUs",
    element: <AboutUs />,
  },
  {
    path: "/Auth",
    element: <Auth />,
  },
  {
    path: "/ContactUs",
    element: <ContactUs />,
  },
  {
    path: "/Documents",
    element: <Documents />,
  },
  {
    path: "/JoinUs",
    element: <JoinUs />,
  },
  {
    path: "/ResearchesAndStudys",
    element: <ResearchesAndStudys />,
  },
  {
    path: "/SaidAboutUs",
    element: <SaidAboutUs />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
