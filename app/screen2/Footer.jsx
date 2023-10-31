export default function Footer() {
    return (
      <div className="w-full mt-20 h-footerheight w-footerwidth bg-footerbg rounded-bl-footerborder rounded-br-footerborder flex flex-row items-center fixed left-0 bottom-0  sm2:w-[360px]">
        <div className="pl-9 pt-3 pr-12">
          <p className="text-xs text-white font-Inter line-through decoration-red-600">&#8377;25,000</p>
          <div className="flex flex-row">
            <p className="text-white text-lg font-bold font-Inter">&#8377;12,000</p>
            <p className="text-white text-xs pt-1.5 font-Inter">/per package</p>
          </div>
        </div>
        <div className="ml-auto mr-4 sm:mr-20 h-footerbookh w-footerbookw bg-footerbookbg flex justify-center items-center rounded-lg shadow-footerbookshadow">
          <p className="text-white text-xs font-medium font-Inter">
            Book Now</p>
        </div>
      </div>
    );
  }
  