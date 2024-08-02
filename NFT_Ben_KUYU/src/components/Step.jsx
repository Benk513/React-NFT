 
const Step = ({ item }) => {
  
const {icon,title, content} = item;
const IconComponent =icon;
  return (
    <div>
      
              {/* step card */}
              <div className="rounded-3xl bg-nft-50 flex flex-col gap-[10px] p-6 flex-wrap">
        <span className="bg-nft-800 inline-block p-[10px] rounded-[10px] w-[50px]  h-[50px] items-center">

          <IconComponent size={25} color="white" />
      
              </span>
            

                  <h2 className="text-xl font-bold  text-nft-800">{title}</h2>
        <p className="text-nft-400 text-sm font-medium">{content}</p>
              </div>
    </div>
  )
}

export default Step
