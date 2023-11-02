import Image from "next/image"

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

                    <Image src="/carAutomative.svg" alt="carAutomative" className="ms:w-[30px] ms:h-[30px] " width={28} height={28} />
                </div>
                <div className="pt-4 pl-59 ">
                    
                <Image src="/Drink.svg" alt="Drink" className="ms:w-[30px] ms:h-[30px] " width={28} height={28}/>

                </div>
                <div className="pt-4 pl-[54px]">
                    <Image src="/food-restaurant-icon 1.svg" alt="food" className="ms:w-[30px] ms:h-[30px] "  width={30} height={28}/>
                </div>
                <div className="pt-4 pl-37.14">
                    <Image src="/island-icon 1.svg" alt="island" className="ms:w-[40px] ms:h-[30px] ms:ml-[10px] " width={37} height={28}/>
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
<Image src="/Filters Salah.svg" alt="Filters" width={27} height={10}/>
                    </div>
                    <div className="pl-[70px]  pt-4">
<Image src="/Child-stay-free.svg" alt="Child" width={20} height={10}/>
                    </div>
                    </div>
                    <div className=" flex flex-row">
                    <div className="pl-[45px] pt-0">
                        <Image src="/secure-icon 1.svg" className="ms:w-[30px]" alt="secure" width={25} height={28}/>
                    </div>
                    <div className="pl-[52px] pt-0">
                        <Image src="/Kids-icon.svg" alt="Kids" width={36} height={28} />
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