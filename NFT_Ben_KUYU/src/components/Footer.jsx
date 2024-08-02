const Footer = () => {
  return (
    <footer>
          <div className="flex items-start mb-[14px]">
          <img src="/logo.svg" alt="logo" width={36} height={36}  />
      
          </div>

          <div className="  border-t border-nft-100 ">
              
              <nav className="lg:flex justify-between items-center py-10">
                  <h1 className="text-2xl font-semibold mb-3">Create Explore & Collect Digital  NFTs</h1>
                  <ul className="flex gap-[30px]">
                      <li className="hover:cursor-pointer">Privacy</li>
                      <li className="hover:cursor-pointer">Terms & Conditions</li>
                      <li className="hover:cursor-pointer">About Us</li>
                  </ul>
              </nav>
       </div>
    </footer>
  )
}

export default Footer
