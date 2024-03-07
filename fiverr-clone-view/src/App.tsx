import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer";
import { Home } from "./pages/home";
import Gigs from "./pages/gigs";
import Login from "./pages/login";


function App() {

  const Layout = () => {
    return (
      <div className="">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    )
  }


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/gigs", element: <Gigs /> },
        { path: "/login", element: <Login/>},
      ]
    },
  ]);


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
