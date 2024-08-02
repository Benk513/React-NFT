// import { stepsData } from "../data"
import { stepsData } from "../data"
import Step from "./Step"
 
const Steps = () => {
  return (
    // Section for Steps 
    <section className="mb-[96px]   p-4 lg:p-0">
          <h1 className="header2">Create and Sell Now</h1>
          
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {stepsData.map((item, index) => {
        
          return <Step key={index} item={item}  />
        })}
              
           
          </div>
    </section>
  )
}

export default Steps


// flex flex-wrap lg:flex-nowrap gap-6