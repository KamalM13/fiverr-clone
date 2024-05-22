import { CheckCircle } from "lucide-react"

const HeroMarketing = () => {
    return (
        <div className=" md:flex md:flex-row flex-col p-3 justify-center items-center gap-x-10 py-10 mt-10 bg-[#f1fdf7]">
            <div className="flex flex-col items-center md:items-start p-10">
                <div className="font-bold text-3xl py-10">
                    Discover the Difference <br /> Every Time.
                </div>
                <div className="flex items-center">
                    <div className="pr-2"><CheckCircle size={20} /></div>
                    <span className="text-xl font-semibold"> Tailored Solutions </span> <br />
                </div>
                <div>
                    Customized services to fit your unique needs. <br /> Personalized, not one-size-fits-all.
                </div>
                <div className="flex items-center">
                    <div className="pr-2"><CheckCircle size={20} /></div>
                    <span className="text-xl font-semibold"> Transparent Process </span> <br />
                </div>
                <div>
                    Clear communication and full visibility. <br /> No surprises, just honest collaboration.
                </div>
                <div className="flex items-center">
                    <div className="pr-2"><CheckCircle size={20} /></div>
                    <span className="text-xl font-semibold"> Expert Guidance </span> <br />
                </div>
                <div>
                    Benefit from seasoned professionals. <br /> Trusted advice every step of the way.
                </div>
                <div className="flex items-center">
                    <div className="pr-2"><CheckCircle size={20} /></div>
                    <span className="text-xl font-semibold"> Timely Delivery </span> <br />
                </div>
                <div>
                    On-time completion, every time. <br /> Your deadlines, our priority.
                </div>
            </div>
            <div className="object-contain">
                <img alt="Video teaser image" src="https://random.imagecdn.app/1920/1080" className="w-[640px] h-[530px]" ></img>
            </div>

        </div>
    )
}

export default HeroMarketing