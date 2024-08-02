  
 const CTA = () => {
     return (
     
         <section
             className='rounded-[32px] h-[336px]   flex flex-col items-center justify-center gap-10 relative mb-[96px] mx-auto px-4'
         
          >
             <h1 className='text-[28px] lg:text-6xl md:text-[46px] text-white font-medium '>Build your NFT profile</h1>
             <h2 className='text-base md:text-[18px]  text-white font-medium '>Join almost 10k NFT profiles on Digit !</h2>

             <button className="bg-white text-nft-800 py-[10px] px-[26px] rounded-[42px] hover:bg-nft-800 hover:text-white transition-all duration-300">Sign up now</button>
             <img src="/ctaBackground.jpg" alt="" className='w-full absolute z-[-1] h-[336px] object-cover rounded-[32px] contrast-100'   />
       
        
        </section>   
   
         
     
   )
 }
 
 export default CTA
 