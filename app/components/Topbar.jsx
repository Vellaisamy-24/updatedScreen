"use client"
import { useContext } from "react";
import { DescriptionContext } from "../packagelist/page";
import Image from "next/image";


export default function Topbar() {
  const {packageName } = useContext(DescriptionContext);
  return (
    <div className='relative'>
      <div class="w-full sm:w-screen h-auto bg-backgroundColor rounded-36 sm2:w-[360px]">
        <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 border-solid border-gray-300 bg-gradient-to-t from-gray-200 via-white to-gray-200 border-t-0 rounded-[39px 39px 0px 0px] bg-cover bg-no-repeat bg-center relative" style={{ backgroundImage: `url("/topImage.png")`, width: "100%", height: "310px" }}>
          <div className="flex flex-row justify-center">
            <div className="pl-5 pt-31 mobi:pl-[2px]">
              <Image src="/Group_106.svg" alt="Group 106" width={40} height={40}  />
            </div>

            <div className="pl-46.03 pt-7 text-white text-2xl text-center font-inter not-italic  font-bold" style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
              Tripmilestone
            </div>
            <div className="pl-46 pt-31">
              <Image src="/ShareIcon.svg" alt="Share Icon" width={40} height={41}  />
            </div>
          </div>
          <div class="mt-32 pl-5 text-white w-283 h-54 font-montserrat not-italic font-normal leading-normal text-22" style={{ letterSpacing: "-0.99px" }}>
          { packageName }
          </div>
        </div>
  
      </div>
    </div>
  );
}
