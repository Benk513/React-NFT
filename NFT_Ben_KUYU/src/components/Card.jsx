import { FaEthereum } from "react-icons/fa";

const Card = ({ item }) => {
  
  const { title, image ,value} = item;
  return (
   
    <div className="border border-nft-100 rounded-[20px] w-full p-3 basis-full md:basis-1/3">
    <img src={image} alt="" className="rounded-[20px]  w-[258px] h-[213px] object-cover" />

    <div className="flex justify-between mt-4">
        <h3 className="font-semibold  text-[16px]">{title}</h3>
              
        <span className="flex items-center gap-2">
          <span className="border-nft-500 border p-1 rounded-full ">
            <FaEthereum
                     />
          </span>
                  
                  <p
                      className="font-semibold text-[16px]">{value}</p>
              </span>
    </div>

    <button className="border border-nft-800 w-full rounded-xl py-2 text-nft-800 mt-4 btn-hover">Place a Bid</button>
</div>
  )
}

export default Card
