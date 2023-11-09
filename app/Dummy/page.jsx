import Image from 'next/image';
export default function Dummy() {
    return (
        <div>
            <div className='sm:flex justify-center text-custom-orange font-montserrat text-[20px]  not-italic font-normal leading-[24px] '>
            List of Packages
            </div>

      <div className='flex justify-center'>
        <div >
          <div className="mt-[20px] ml-[15px] w-[320px] bg-bookingbg font-montserrat not-italic leading-[28px] tracking-[0.36px] font-normal text-[15px] text-white text-center h-[22px] rounded-tl-[15px] rounded-tr-[15px] bg-red-200">
            Manali - Honeymoon - Platinum Package
          </div>
          <div className="rounded-[12px] bg-white border border-custom-green border-solid border-[1px] w-[350px] h-[130px] p-[10px] gap-4 items-center flex shrink-0">
              <div className='flex'>
                           <div>
                               <Image className='rounded-[6px] ' src="/hotel.jpg" alt="pin" width={100} height={90} />
                           </div>
                     <div className=''>
                          <div className='pl-[8px] text-custom-green font-ibmplex text-[14px] not-italic font-normal leading-[18px] tracking-[0.24px] capitalize '>
                          enchanting manali 6 day-himalayan 
                          </div>
                          <div className='mt-[11.5px]'>
                            <span className=' pl-[8px] text-custom-orange font-ibmplex text-[12px] font-normal not-italic leading-[18px] tracking-[0.2px] capitalize'>3N</span>
                            <span className='pl-[4px] text-custom-gray font-ibmplex text-[12px] font-normal not-italic leading-[18px] tracking-[0.2px] capitalize'>- Manali </span>
                            <span className='pl-[3px] pr-[3px] text-custom-gray font-ibmplex text-[12px] font-normal not-italic leading-[18px] tracking-[0.2px] capitalize '>|</span>
                            <span className='pl-[4px] text-custom-orange font-ibmplex text-[12px] font-normal not-italic leading-[18px] tracking-[0.2px] capitalize'>2N</span>
                            <span className='pl-[4px] text-custom-gray font-ibmplex text-[12px] font-normal not-italic leading-[18px] tracking-[0.2px] capitalize'>- Shimla </span>
                          </div>
                          <div className='flex mt-[11px]'>
                          <div className='grid'>
                            <span className='ml-[16px]'> <Image className=' ' src="/hotel-building.svg" alt="pin" width={14} height={14} /></span>
                            <span className='font-montserrat text-[10px] ml-[8px] not-italic font-normal leading-[10.8px] text-custom-green '>2 Hotel</span>
                          </div>
                          <div className='grid'>
                            <span className='ml-[30px]'> <Image className='' src="/food-meals.svg" alt="pin" width={14} height={14} /></span>
                            <span className='pl-[12px] font-montserrat text-[10px] ml-[8px] not-italic font-normal leading-[10.8px] text-custom-green '>3 Meals</span>
                          </div>
                          <div className='grid'>
                            <span className='ml-[30px]'> <Image className=' ' src="/travel-cab.svg" alt="pin" width={14} height={14} /></span>
                            <span className=' pl-[15px] font-montserrat text-[10px] ml-[8px] not-italic font-normal leading-[10.8px] text-custom-green '>1 Cab</span>
                          </div>
                          <div className='grid'>
                            <span className='ml-[20px] text-custom-orange'>&#8377; 5,333</span>
                            <span className='pl-[35px] text-custom-person font-montserrat not-italic font-light leading-[10.8px] text-[8px] '>Per Person</span>
                          </div>
                          </div>
                     </div>
                 </div>
       
          </div>
        </div>
      </div>
      </div>
    );
  }
  