
import Image from "next/image"
import hotel from "../public/hotel.svg";
import grillIcon from "../public/grillIcon.svg";
import cartaxiIcon from "../public/cartaxiIcon.svg";
import HumanIcon from "../public/Human-multiple-person-up-user.svg"
import LocationIcon from "../public/Location.svg"
import TimeIcon from "../public/Duration-icon.svg"
import Group_107 from "../public/Group_107.svg"

export default function PackageHighligh()
{
  return(
    <>
    <div className="">
    
    <div className="flex flex-start justify-start mt-3 mobi:mt-3 ">
      
    <div className="ms:text-[18px] ms:w-[85px] ms:h-[32px] ms:py-[7px] ms:font-ibm-plex-sans bg-platinumbg text-center text-white tracking-0.24 font-normal leading-4 font-ibmplexsans not-italic flex justify-center text-xs ml-2 w-63 h-7 rounded-custom p-5  pt-1.5 mobi:pt-1.5 ">
        platinum
        </div>
        
      <div className="pl-[210px]">
        <Image src={Group_107} alt=""/>
      </div>
    </div>
     
     <div className="mobi:flex flex-col justify-center">
        <div className="text-custom-orange font-montserrat text-sm not-italic font-semibold leading-normal pt-5 pl-22  ">
        Package Highlights

        </div>
        <div className="flex flex-row ms:py-[5px]">
          <div className="pl-22 pt-4">
  <Image src={LocationIcon} alt="" />
 </div>
          <div className="pl-3 pr-1 text-xs font-ibm-plex-sans text-custom-orange not-italic font-semibold leading-18 tracking-0.24 capitalize pt-22">3N</div>
          <div className=" text-xs  font-ibm-plex-sans not-italic font-semibold leading-18 tracking-0.24 capitalize text-gray-3 pt-22 ">- Manali</div>
          <div className="pl-2 font-ibm-plex-sans text-gray-3 text-xs not-italic font-semibold leading-18 tracking-0.24 capitalize pt-22 ">|</div>
          <div className="pl-2 pr-1 text-custom-orange font-ibm-plex-sans text-xs not-italic font-semibold leading-18 tracking-0.24 capitalize  pt-22">2N </div>
          <div className="text-gray-3 font-ibm-plex-sans text-xs not-italic font-semibold leading-18  tracking-0.24 capitalize pt-22 ">- Shimla</div>
        </div>
        <div className="flex flex-row ms:py-[5px]">
          <div className="pl-22 pt-11.97">
<Image src={TimeIcon} alt="" />
          </div>
          <div className="font-ibm-plex-sans text-xs not-italic font-medium leading-normal pl-3 pt-5  text-linear-green-2 ">5N/ 6D</div>
          <div className="ml-8 mt-3 rounded-lg bg-custom-gray w-8 h-8 " >
            <div className="p-2 ">    <Image src={HumanIcon} alt=""/></div>


          </div>
          <div className="pl-3 pt-5 font-ibm-plex-sans text-xs not-italic font-medium leading-normal text-linear-green-2 ">2 Adult + 1 Child</div>
    </div>
        <div className="flex flex-row ms:py-[5px] ">
                 <div className="pl-22 pt-3">
                         <Image src={hotel} alt=""/>
                   </div>
          
            <div className=" text-linear-green-2 font-ibm-plex-sans text-xs not-italic leading-135 font-medium pt-5 pl-3 ">
                     2 Hotels

            </div>
       
          <div className="  rounded-lg bg-custom-gray w-8 h-32.027 mt-3 ml-7 ">

                 <div className=" p-2 "> 
                    <Image src={grillIcon} alt=""/>
                 </div>
            </div> 
            <div className="pt-5 pl-3 text-linear-green-2 font-ibm-plex-sans font-medium leading-135 not-italic text-xs ">3 Meals
          </div>
          <div className="pl-31 pt-3">
          <Image src={cartaxiIcon} alt=""/>
            
          </div>
          <div className=" pl-3 pt-5 font-ibm-plex-sans text-xs not-italic font-medium leading-13 text-linear-green-2 ">
          4 Seater
          </div>
 </div>
 <div className=" text-custom-orange py-4 pl-22  not-italic font-montserrat font-semibold leading-normal text-sm mobi:pl-8">Hotels</div>
 </div>

 </div>

</>
   
  
  )
}