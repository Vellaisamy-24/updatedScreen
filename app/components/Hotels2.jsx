"use client"
import { useContext } from "react";
import { DescriptionContext } from "../packagelist/page";
import Image from 'next/image';

export default function Hotels() {
  const {hotel2,hotel2Rating,hotel2View} = useContext(DescriptionContext);
  return (
    <div className="mb-4 flex flex-row justify-center ms:mb-[20px]">
      <div className="h-[67px] w-bww border shadow-boxshadow p-2.5 rounded-[10px] flex flex-row">
        <Image src="/Big-Daddy-Casino.jpg" alt="Big-Daddy-Casino"  width={73} height={340} className="h-imgheight w-imgwidth shadow-imgshadow rounded mt-1" />
        <div>
          <div className="flex flex-row items-center">
            <p className="text-neutral-400 text-xs font-normal pl-4 pr-5 font-ibmplexsans">{hotel2}</p>
            <p className="h-3.5 w-16 border-snowborder border-2 rounded text-mountsize font-Poppins font-medium leading-3 text-center text-snowcolor">{hotel2View}</p>
          </div>
          <div className="pl-4 flex flex-row pt-0.5">
            <Image src="/StarRating.svg" alt="StarRating" className="pr-[2px] w-[15px] h-[30px] pt-1" width={19} height={18} />
            <p className="text-[12px] pt-2.5 mr-[10px] pl-1 pr-[5px] font-ibmplexsans text-neutral-400">{hotel2Rating}</p>
            <Image src="/tower.svg" alt="tower" className="" width={18} height={19}  />
            <p className="text-dlxsize pt-2.5 pl-1 text-dlxcolor font-normal">Deluxe Room</p>
            <span className="pl-4 pt-1">
              <Image src="/food.svg" alt="food" className="mt-1" width={19} height={18} />
            </span>
            <span className="py-2 pl-3">
              <p className="px-1.5 mt-1 py-px rounded text-breaksize text-breakcolor bg-breakbgcolor tracking-breakspace font-medium font-ibmplexsans leading-breakheight">Breakfast + Dinner</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
