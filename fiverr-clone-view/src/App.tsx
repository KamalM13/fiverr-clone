import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
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



const queryClient = new QueryClient()

function App() {

  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <div className="">
          <Navbar />
          <Outlet />
          <Footer />
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
        { path: "/gigs", element: <Gigs /> },
        { path: "/login", element: <Login /> },
        { path: "/completeProfile", element: <CompleteProfile /> },
        { path: "/personalInfo", element: <PersonalInfo /> },
        { path: `/gig/:id`, element: <Gig /> },
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
