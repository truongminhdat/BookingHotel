import anhvungtau from "../../../assets/anhvungtau.png"
import useFetch from "../../hooks/useFetch"
import './feature.css'
const Feature = () => {
    // const {data, loading, error} = useFetch("http://localhost:8001/hotel/getAllHotel")

    return(
       <div className="featured">
     
        <div className="featuredItem">
            <img src={anhvungtau} alt="" className="featuredImg"/>
            <div className="featuredTitle">
            <h1>Da Lat</h1>
            <span>2000 cho nghi</span>
            </div>
           
        </div>
    
       
        <div className="featuredItem">
            <img src={anhvungtau} alt="" className="featuredImg"/>
            <div className="featuredTitle">
            <h1>Da Lat</h1>
            <span>2000 cho nghi</span>
            </div>
           
        </div>
        <div className="featuredItem">
            <img src={anhvungtau} alt="" className="featuredImg"/>
            <div className="featuredTitle">
            <h1>Da Lat</h1>
            <span>2000 cho nghi</span>
            </div>
           
        </div>

       </div>
    )
}
export default Feature