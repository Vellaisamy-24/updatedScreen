import Image from "next/image"
import bgimg from '../public/Big-Daddy-Casino.jpg'
import tower from '../public/tower.svg'
import food from '../public/food.svg'
import star from '../public/StarRating.svg'
export default function Hotels()
{
    return(<>
       
        <div className="mb-4 flex flex-row justify-center ms:mb-[20px] ">  

            <div className="h-bwh w-bww border shadow-boxshadow p-2 flex flex-row">
              <Image src={bgimg} alt="" className="h-imgheight w-imgwidth shadow-imgshadow rounded mt-2" />
                <div>
                    <div className="flex flex-row items-center">
                        
                        <p className="text-neutral-400 text-xs font-normal pl-4 pr-5 font-ibmplexsans">3N - WoodRock Hotel, Manali</p>
                        <p className="h-3.5 w-14 border-mountborder border-2 rounded text-mountsize font-Poppins font-medium text-center leading-3 text-mountcolor">Mountain View</p>
                    </div>
                    <div className="pl-4 flex flex-row pt-0.5">
                    <Image src={star} alt="" className="pr-[2px] w-[15px] pt-1 h-[30px]"/>
                    <p className="text-[12px] pt-2.5 mr-[10px] pl-1 pr-[5px] text-neutral-400 ">4.5</p>
                        <Image src={tower} alt="" className=""/>
                        <p className="text-dlxsize pt-2.5 pl-1 text-dlxcolor font-normal">Deluxe Room</p>
                       <span className="pl-4 pt-1">
                        <Image src={food} alt="" className="mt-1"/></span> 
                      <span className=" py-2 pl-3 ">
                        <p className=" px-1.5 mt-1 py-px rounded text-breaksize text-breakcolor bg-breakbgcolor tracking-breakspace font-medium font-ibmplexsans leading-breakheight">Breakfast + Dinner</p>
                    </span>  
                        
                    </div>
                </div>
            </div>
            </div>  
            </>
        
    )
}