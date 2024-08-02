import { collectionData, collectionFilters } from "../data"
import Card from "./Card"
import CollectionFilterButton from "./CollectionFilterButton"
 
 
const Collections = () => {
    return (
    //   HEADER SECTION OF COLLECTIONS 
        <div className="mb-9  ">
            {/* Our Collections */}
          <h1 className="header2">Our Collections</h1>
          
            
            {/* Filters  */}
            <div className="flex flex-wrap justify-between items-center mb-9">
                
                <div className="flex flex-wrap gap-2">                  
                   
        
            {collectionFilters.map((filter) => {
               return <CollectionFilterButton filter ={ filter } key={filter.id}  />
            })}  
                </div>
            

                <div><button className=" underline text-lg">View more</button></div>
            </div>

            
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          

          {collectionData.map((item) => {
            return <Card key = { item.id } item = { item } />}
          
          )}
      
            </div>
          




    </div>
  )
}

export default Collections
