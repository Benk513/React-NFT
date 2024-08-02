 
// const CollectionFilterButton = (prop) => {
//   return (
//     <div>
//           <button
//               className={`${prop.active ? "bg-nft-800 text-white":"bg-nft-50 text-nft-800"} rounded-xl  font-semibold text-lg py-[10px] px-[26px]`}
//           > {prop.title}</button>
//     </div>
//   )
// }

// export default CollectionFilterButton

 
// const CollectionFilterButton = (prop) => {
//   return (
//     <div>
//           <button
//               className={`${prop.active ? "bg-nft-800 text-white":"bg-nft-50 text-nft-800"} rounded-xl  font-semibold text-lg py-[10px] px-[26px]`}
//           > {prop.title}</button>
//     </div>
//   )
// }

// export default CollectionFilterButton

const CollectionFilterButton = ({ filter }) => {
    const { active, title } = filter;
    return (
        <div>
            <button
                className={`${active ? "bg-nft-800 text-white" : "bg-nft-50 text-nft-800"} rounded-xl font-semibold text-lg py-[10px] px-[26px] hover:bg-nft-100 transition duration-300`}
            >
                {title}
            </button>
        </div>
    )
}

export default CollectionFilterButton