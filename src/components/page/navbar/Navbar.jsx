import "./navbar.css"
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios"
import { AuthContext } from "../../helpers/AuthContext";




const Navbar = () => {
    const [authState, setAuthState]  = useState(false);
    const [email, setEmail] = useState('');
    const [id, setId] = useState('');
    useEffect(() => {
        axios.get('http://localhost:8001/auth/auth',{
            headers: {
                accessToken: localStorage.getItem('accessToken')
            }
        }).then((response) => {
            if(response.data.error){
                setAuthState(false);
            }else{
                setAuthState(true);
                setEmail(response.data.email);
                setId(response.data.id)
            }
        })
    })

    
  
    return(
        <div className="navbar">
            <div className="navContainer">
                <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
                <span className="logo">lamabooking</span>
                </Link>
                <AuthContext.Provider value={{authState, setAuthState}}>
                <div className="navItems">
                {!authState && (
                <div className="navItems">
                    
                <button className="navButton">Register</button>
               
                <button className="navButton"><Link to="/login">Login</Link></button>
            </div>

                       
                )}
                {
                    <div>
                         <Link to={`/profile/${id}`}><span>{email}</span></Link> 
                    </div>
                  
                    
                    
                   
                }
                 </div>
                </AuthContext.Provider>
             
                
            </div>
        </div>
    )

}
export default Navbar