import Secondpart from "./Secondpart"
import Firstpart from "./Firstpart"
import { useLocation } from "react-router-dom"


const Footer = () => {
  const { pathname } = useLocation()
  return (
    <>
      {pathname === '/login' ? (<span></span>) : (<Firstpart />)}
      <hr />
      <Secondpart />
    </>

  )
}

export default Footer