import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import { Home } from "./pages/home";
import Gigs from "./pages/gigs";


function App() {

  const Layout = () => { 
    return (
      <div className="overflow-hidden md:overflow-clip">
        <Navbar  />
        <Outlet/>
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
        {path: "/gigs", element: <Gigs/>}
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
