 import { useState } from "react"
import { navLinks } from "../data"
import { RxHamburgerMenu } from "react-icons/rx";

import { IoMdClose } from "react-icons/io";

const Header = () => {

  const [toggle, setToggle] = useState(false)
    return (
      <header className="max-w-[1440px] mx-auto flex    py-10 items-center ">
      <nav className="w-full flex justify-between">
          <a href="#/">
            <img src="/logo.svg" alt="logo" width={36} height={36} />
          </a>
          
                
          <ul className="list-none hidden  md:flex gap-7 font-semibold text-nft-700">
            

            {navLinks.map((nav) => (
              <li key={nav.id}>
                <a href={`#${nav.id}`} className="text-nft-300 hover:text-nft-
                900 transition duration-300 hover:text-nft-600 cursor-pointer">{nav.title}

                </a>
                </li>
             
            ))}
             
          </ul>

          
          {/* Navigation Buttons  */}
          
          <div className="hidden lg:flex gap-5 items-center">
            <button className="btn-signUp">Sign up</button>
              
            <button className="btn-connectWallet">Connect Wallet</button>
          </div>



          {/* Navigation Sidebar */}

          <div className="  lg:hidden">
            <span className="inline-block bg-nft-50 p-2 rounded-lg"
            onClick={() =>setToggle((prev) => !prev)}>
              {toggle ?<IoMdClose className="w-[20px] h-[20px] " />
                 : <RxHamburgerMenu className="w-[20px] h-[20px] "/> 
              }

              
            
              
            </span>

            {/* menu */}
            {/* <div className="absolute top-0 right-0 w h-screen bg-white p-5 lg:hidden" style={{ display: toggle ? 'block' : 'none' }}>
              hey click me 


            </div> */}

              {/* Side drawer box */}
            <div className={toggle ? "fixed top-0 right-0 w-[330px] h-screen  z-10 duration-300" : "fixed top-0 right-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}>
              <span className="inline-block bg-nft-50 p-2 rounded-lg absolute right-5  top-5">

              <IoMdClose onClick={() => setToggle(!toggle)} className="cursor-pointer" size={20} />
              </span>

              {/* Side Drawer Navigation */}
              <nav>
                <ul className="flex flex-col ml-[26px] mt-[80px] p-4 md:flex gap-6 font-semibold text-nft-700">
                {navLinks.map((nav) => (
                <li key={nav.id}>
                  <a href={`#${nav.id}`} className="text-nft-300 hover:text-nft-
                  900 transition duration-300 hover:text-nft-600 cursor-pointer">{nav.title}
                  </a></li> ))}
              
                </ul>  
              </nav>

              {/* Side Navigation drawer buttons */}

              <div className="lg:hidden flex gap-5 items-center mt-[60px] ml-[26px] ">
                 <button className="btn-signUp">Sign up</button>
                 <button className="btn-connectWallet">Connect Wallet</button>
              </div>
              

              {/* overlay */}
              {toggle && <div className="bg-white absolute w-full h-screen -z-10 top-0 left-0"></div>}

              {/*Decorating  Paths */}

        <div className="lg:hidden border-nft-50 border h-full w-[95%] absolute top-0 -z-10"></div>
        <div className="lg:hidden border border-nft-50 h-[8%] absolute bottom-0 w-full -z-10"></div>

          </div>


          </div>

        </nav>

        

        



        </header>
  )
}

export default Header
