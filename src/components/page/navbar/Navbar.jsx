import "./navbar.css"
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
const Navbar = () => {
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [users, setUsers] = useState([]);
    let navigate = useNavigate();
    
    useEffect(() => {
        refreshToken();
        getUsers();
    }, []);
 
    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:8001/auth/token',
                {
                    withCredentials: true,
                  }
            );
            console.log('check token',response)
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        } catch (error) {
            if (error.response) {
                navigate("/home");
            }
        }
    }
 
    const axiosJWT = axios.create();
 
    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            const response = await axios.get('http://localhost:8001/auth/token');
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });
 
    const getUsers = async () => {
        const response = await axiosJWT.get('http://localhost:5000/users', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        setUsers(response.data);
    }
    return(
        <div className="navbar">
            <div className="navContainer">
                <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
                <span className="logo">lamabooking</span>
                </Link>
               
                <div className="navItems">
                    <button className="navButton">Register</button>
                   
                    <button className="navButton"><Link to="/login">Login</Link></button>
                </div>
            </div>
        </div>
    )

}
export default Navbar