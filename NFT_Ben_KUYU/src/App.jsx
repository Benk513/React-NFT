import {Footer ,CTA,Collections ,Header,Hero, Steps} from  "./components/"
  
const App = () => {
  return (
  <div className="relative"  >
     {/* Main layout */}
    <div className=" max-w-[1440px] lg:w-[1200px] md:w-[678px] mx-auto p-4"   >
      
        <Header />
        <Hero />
        <Collections />
        <Steps/>
        <CTA />
        <Footer/>
      
      </div>

      {/* paths lines */}

      {/* vertical line */}
      <div className="border-nft-50 h-full absolute top-0 lg:left-[10%] md:left-[2%] left-[4%] border-l w-1 "> </div>
     
     {/* horizontal line */}
      <div className="border-nft-50   h-2 absolute top-[2%] lg:top-[6%] md:top-[3%]  left-[0%] w-full border-t "> </div>
    </div>
  )
}

export default App

