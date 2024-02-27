import { Link } from "react-router-dom"


const Extranavbar = () => {
    return (
        <>
            <hr className="hidden md:inline w-full border-1 text-gray-500 " />
            <div className="hidden md:flex w-full max-w-[1400px] px-4 md:px-7 justify-between font-light p-2 ">
                <Link to="/">
                    Graphics & Design
                </Link>
                <Link to="/">
                    Video & Animation
                </Link>
                <Link to="/">
                    Writing & Translation
                </Link>
                <Link to="/">
                    AI Services
                </Link>
                <Link to="/">
                    Digital Marketing
                </Link>
                <Link to="/">
                    Music & Audio
                </Link>
                <Link to="/">
                    Programming & Tech
                </Link>
                <Link to="/">
                    Business
                </Link>
                <Link to="/">
                    Lifestyle
                </Link>
            </div>
            <hr className="w-full border-1 text-gray-500 " />
        </>
    )
}

export default Extranavbar