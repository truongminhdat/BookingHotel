
import Logo from "../../../assets/anhdalat.jpg"
import useFetch from "../../hooks/useFetch"
import './property.css'
const PropertyList = () => {
    const {data, loading, error} = useFetch("hotel/countHotel")
   
    return(
      
        <div className='pList'>
            {loading ? (
                "loading"
            ): (
                <>
                {data && data.map(item => (
                     <div className='pListItem'>
                     <img src={Logo}/>
                     <div className='plistTitle'>
                         <h1>{item.type}</h1>
                         <h2>{item.count}{item.type}</h2>
                     </div>
                     </div>

                ))}
                </>
               

        
              
            )}
       
           
        </div>
    )
}
export default PropertyList