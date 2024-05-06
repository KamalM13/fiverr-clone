import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'



import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer";
import { Home } from "./pages/home";
import Gigs from "./pages/gigs";
import Login from "./pages/login";
import CompleteProfile from "./pages/completeProfile";
import PersonalInfo from "./pages/personalInfo";
import Gig from "./pages/gig";
import Admin from "./pages/admin";
import ConfirmOrder from "./pages/confirmOrder";
import Sidebar from "./components/sidebar/sidebar";
import Order from "./pages/order";



const queryClient = new QueryClient()

function App() {


  const Layout = () => {
    const location = useLocation().pathname;
    return (
      <QueryClientProvider client={queryClient}>
        <div className="">
          {location === "/admin" ? (
            <>
              <Sidebar />
              <Outlet />
            </>
          ) : (
            <>
              <Navbar />
              <Outlet />
              <Footer />
            </>
          )}
        </div>

      </QueryClientProvider>
    )
  }


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/login", element: <Login /> },
        { path: "/gigs", element: <Gigs /> },
        { path: `/gig/:id`, element: <Gig /> },
        { path: `/gig/:id/order/:planNumber`, element: <ConfirmOrder /> },
        { path: "/completeProfile", element: <CompleteProfile /> },
        { path: "/order/:id/:planNumber/:choosenBilling", element: <Order /> },
        { path: "/admin", element: <Admin /> },
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
