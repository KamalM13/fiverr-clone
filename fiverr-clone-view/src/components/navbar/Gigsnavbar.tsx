
import { Search } from "lucide-react"
import Gigsnavbartextdropdown from "./Gigsnavbartextdropdown"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Gigsnavbar = () => {
    const [inputValue, setInputValue] = useState('')
    const navigate = useNavigate()

    const handleSearch = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        navigate(`?search=${encodeURIComponent(inputValue)}`);
    }

    return (
        <>

            <form onSubmit={handleSearch} className="flex items-center">
                <input className="border-[1px] border-r-0 rounded-l-[5px] w-screen max-w-[550px] p-2"
                    placeholder="What service are you looking for today?"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button className="bg-black p-2 border-[1px] border-black rounded-r-[5px] cursor-pointer"
                >
                    <Search className="text-white" />
                </button>
            </form>
            <Gigsnavbartextdropdown />
        </>
    )
}

export default Gigsnavbar