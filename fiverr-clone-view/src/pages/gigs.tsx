import Gigscard from "@/components/gigscards/Gigscard"
import GigsCard from "@/components/gigscards/Gigsmobilecard"
import Gigspormotion from "@/components/gigspormotion/Gigspormotion"




const Gigs = () => {

  // const items = [
  //   {
  //     "link": "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161247/ai-artists-2x.png",
  //     "name": "AI Artists"
  //   },
  //   {
  //     "link": "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161257/logo-design-2x.png",
  //     "name": "Logo Design"
  //   },
  //   {
  //     "link": "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161257/wordpress-2x.png",
  //     "name": "Wordpress"
  //   },
  //   {
  //     "link": "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161253/voice-over-2x.png",
  //     "name": "Voice Over"
  //   },
  //   {
  //     "link": "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161245/animated-explainer-2x.png",
  //     "name": "Animated Explainer"
  //   },
  //   {
  //     "link": "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161249/social-2x.png",
  //     "name": "Social Media"
  //   }
  // ]
  return (
    <>
      <div className="font-bold text-2xl p-3 pl-8">
        Hey there, John Doe
      </div>
      <Gigspormotion />
      <div className="p-3 md:pl-8 font-bold text-lg py-4">
        Most Popular Gigs in <span className="text-blue-600">Illustration</span>
      </div>
      {/* //Mobile Gig card */}
      <div className="md:hidden flex flex-col">
        <GigsCard />
        <GigsCard />
        <GigsCard />
        <GigsCard />
        <GigsCard />
        <GigsCard />
        <GigsCard />
      </div>

      {/* // Desktop Gig card */}
      
      <div className="hidden md:flex justify-center gap-x-3">
        <Gigscard />
      </div>
    </>

  )
}

export default Gigs