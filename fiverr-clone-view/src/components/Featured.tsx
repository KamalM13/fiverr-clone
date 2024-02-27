
const Featured = () => {
  return (
    <div className="h-[600px] flex justify-center bg-[#013914] text-white">
      <div className="w-max-[1400px] flex items-center">
        <div className="p-8">
          <h1 className="text-5xl p-3">
            Find the right <span className="font-bold">freelance</span> <br /> service, Right Away
          </h1>
          <div className="flex items-center justify-between py-7 pl-3">
            <input className="rounded-l-[3px] w-full p-2" placeholder="Find the right service" />
            <button className="w-[120px] h-[40px] bg-[#19a463] flex justify-center items-center hover:bg-[#118d53] rounded-r-[3px]"> Search</button>
          </div>
          <div className="flex p-3 gap-3 items-center text-sm">
            <span>Popular: </span>
            <button className="border-[1px] py-1 px-3 rounded-full">Website Design</button>
            <button className="border-[1px] py-1 px-3 rounded-full">Word Press</button>
            <button className="border-[1px] py-1 px-3 rounded-full">Logo Design</button>
            <button className="border-[1px] py-1 px-3 rounded-full">AI services</button>
          </div>
        </div>
        <div className="right">
          <img src="./img/man.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Featured