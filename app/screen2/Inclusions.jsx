import Image from "next/image"
import carIcon from "../public/carAutomative.svg"
import drinkIcon from "../public/Drink.svg"
import foodRestaurantIcon from "../public/food-restaurant-icon 1.svg"
import islandIcon from "../public/island-icon 1.svg"
import childstayIcon from "../public/Child-stay-free.svg"
import filtersalahIcon from "../public/Filters Salah.svg"
import secureIcon from "../public/secure-icon 1.svg"
import kidsIcon from "../public/Kids-icon.svg"
export default function Inclusion()
{
    return(
        <>
        <div>
            <div className=" ms:mb-[10px]   pl-21   pt-26.97 text-custom-orange font-montserrat text-sm non-italic font-semibold leading-normal mobi:pl-8">
            Inclusions
            </div>

            <div className="flex flex-row ">
                <div className="pl-8 pt-19 ms:pl-[43px]">

                    <Image src={carIcon} alt="" className="ms:w-[30px] ms:h-[30px] " />
                </div>
                <div className="pt-4 pl-59 ">
                    
                <Image src={drinkIcon} alt="" className="ms:w-[30px] ms:h-[30px] "/>

                </div>
                <div className="pt-4 pl-[54px]">
                    <Image src={foodRestaurantIcon} alt="" className="ms:w-[30px] ms:h-[30px] " />
                </div>
                <div className="pt-4 pl-37.14">
                    <Image src={islandIcon} alt="" className="ms:w-[40px] ms:h-[30px] ms:ml-[10px] "/>
                </div>
                </div>
                <div className="flex flex-row ">
               <div className="pl-9 pt-3 text-custom-gray-2 text-center font-ibm-plex-sans text-xs font-normal non-italic leading-normal">
               Transfers
               </div>
              
             
                <div className="pt-3 pl-19 text-custom-gray-2 text-center font-ibm-plex-sans text-xs  font-normal non-italic leading-normal ">
                Welcome Drink
                </div>
                <div className="ms:ml-[7px] pl-3 pt-3 text-custom-gray-2 text-center font-ibm-plex-sans text-xs  font-normal non-italic leading-normal">
                Breakfast
                </div>
                <div className=" ms:pl-[23px] pl-13 pt-3 text-custom-gray-2 text-center font-ibm-plex-sans text-xs  font-normal non-italic leading-normal">
                Sightseeing
                </div>
                </div>
                <div className="flex flex-row">
                    <div className="pl-[65px] pt-17.1">
<Image src={filtersalahIcon} alt=""/>
                    </div>
                    <div className="pl-[70px]  pt-4">
<Image src={childstayIcon} alt=""/>
                    </div>
                    </div>
                    <div className=" flex flex-row">
                    <div className="pl-[45px] pt-0">
                        <Image src={secureIcon} className="ms:w-[30px]" alt=""/>
                    </div>
                    <div className="pl-[52px] pt-0">
                        <Image src={kidsIcon} alt=""  />
                   </div>
                    </div>
                    <div className="flex flex-row ms:ml-[10px]">
                        <div className="pl-[30px] pt-3 font-normal leading-normal text-custom-gray-2  text-center text-xs not-italic">
                        Insurance
                        </div>
                        <div className="pt-3 pl-33 font-normal leading-normal text-custom-gray-2  text-center text-xs not-italic ">
                        Child Stay
                        </div>
                    </div>

        </div>


        </>
    )
}