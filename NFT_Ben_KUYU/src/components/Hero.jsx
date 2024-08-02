import { HiArrowLongRight } from "react-icons/hi2";

const Hero = () => {
  return (
    // hero section
    <section className='lg:flex  max-w-[1440px] mx-auto mb-[650px] lg:mb-[96px]'>
      
        {/* Text Section */}
          <div className="flex-col gap-[52px] lg:mt-[93px]  w-full lg:w-2/3 ">
              <h1 className='text-[52px] lg:text-9xl md:text-[96px] md:leading-[82px] lg:leading-[108px] font-light lg:font-light text-nft-600'>See the NFT <br /> new world</h1>

              <div className="flex flex-col lg:gap-[26px]">
                  <p className='text-base text-nft-700 md:mt-8  my-5'>Vorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Etiam eu turpis molestie, di</p>  
                  
                <div className='flex gap-3 items-center'>
                  <p className="font-semibold">Discover Vow</p>
                  <button className="border border-nft-700 hover:bg-nft-50 transition-all duration-300
                    rounded-full p-3"><HiArrowLongRight /></button>
                </div>
                  
              </div>
      </div>
      

      {/* Image section */}
      <div className="mt-10 lg:mt-[120px] relative  w-full  lg:w-1/2 -z-10">
        {/* First portrait */}
        <div className="absolute top-[130px] left-0   md:top-[120px] md:left-[30px] lg:left-[0px]">
          <img src="/faceArt.jpg" alt="" className="rounded-full  lg:w-[240px] "/>
        </div>
        {/* Second Portrait */}
        <div className="absolute top-[20px] right-0 md:top-[-50px] md:right-0">
           <img src="/gorilla.jpg" alt="" className="rounded-full lg:w-[240px]  "/>
        </div>

        <div className="absolute top-[10%] left-[30%] lg:top-[0px] lg:left-[20%]">
         <img src="/ring.svg" alt="" />
        </div>
             
      </div>
          
         
    </section>
  )
}

export default Hero


