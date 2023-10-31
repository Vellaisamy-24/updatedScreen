import Image from "next/image"
import coolicon from '../public/coolicon.svg'
import Date from '../public/Date.svg'
import edit from '../public/edit-icon.svg'
import adult from '../public/Adults.svg'
import building from '../public/building.svg'
import car from '../public/car.svg'
import airticket from '../public/air-ticket.svg'

export default function Booking()
{
    return(
       <div className="flex  flex-row justify-center pb-20 ">
            <div className=" mt-3.5  h-bookingheight w-bookingwidth rounded-3xl shadow-bookingshadow bg-bookingbgcolor">
                <div className="w-bookingwidth h-7 bg-bookingbg rounded-tl-3xl rounded-tr-3xl flex flex-row items-center">
                    <p className="  pl-4 pt-1.5 text-white text-xs font-medium font-normal text-Montserrat">Booking Overview</p>
                    <span className="pl-44">

                    <Image src={coolicon} alt="" className=" "/>
                    </span>
                </div>
                <div className="p-2 pl-3 flex flex-row">
                    <Image src={Date} alt=""/>
                    <p className="text-xs pl-2 pr-14 text-bookingtext">Oct 12, 2023 - 3N/4D - Oct 15, 2023</p>
                    <button><Image className="w-[23px] " src={edit} alt=""/></button>
                    
                </div>
                <div className="pl-3 flex flex-row">
                    <Image src={adult} alt=""/>
                    <p className="text-xs pl-2.5   text-bookingtext">2 Adults & 1 Children</p>
                   
                </div>
                <div className="p-2 pl-3 flex flex-row">
                    <Image src={car} alt=""/>
                    <p className="text-xs pl-2.5  text-bookingtext">Sedan - AC</p>
                    
                </div>
                <div className="pl-3 flex flex-row">
                    <Image src={building} alt=""/>
                    <p className="text-xs pl-2 text-bookingtext">1 Room</p>
                </div>
                <div className="p-2 pb-0 pl-3 flex flex-row">
                    <Image src={airticket} alt=""/>
                    <p className="text-xs pl-1.5 font-ibmplexsans  text-bookingticket">Excluding Flight/Train</p>
                  
                </div>

                <p className=" text-bookingticket text-bookingtext pr-6 font-light flex justify-end">*Package price not valid on long weekend & Blackout Dates</p>
                

            </div>
            </div>
    )
}