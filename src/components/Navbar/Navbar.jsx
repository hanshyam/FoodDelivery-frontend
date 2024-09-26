import React, { useContext, useEffect, useState } from 'react'
import {assets} from "../../assets/frontend_assets/assets" 
import {Link, Navigate, useNavigate} from 'react-router-dom'
import "./Navbar.css"
import { StoreContext } from '../../context/StoreContext'
const Navbar = ({setShowLogin}) => {
    const [menu,setMenu] = useState("home");

    const {getTotalCartAmount,token,setToken} = useContext(StoreContext);
    
    const navigate = useNavigate();

    const logout = () =>{
      localStorage.removeItem("token");
      setToken("");
      navigate("/");
     
    }
    
  return (
    <div className='Navbar'>
       <Link to='/'><img src={assets.logo} className='logo'></img></Link>
       <div className='NavbarCenter'>
          <ul>
            <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
            <a href='#app-download' onClick={()=>setMenu("mobile")} className={menu==="mobile"?"active":""}>Mobile App</a>
            <a href='#footer' onClick={()=>setMenu("contact")} className={menu==="contact"?"active":""}>Contact Us</a>
          </ul>
       </div>
       <div className='NavbarRight'>
           <img src={assets.search_icon}></img>
           <div className='navbar-search-icon'>
               <Link to='/cart'><img src={assets.basket_icon}></img></Link>
               <div className={getTotalCartAmount()===0?"":"dot"}>

               </div>
           </div>
           {!token?
           <button onClick={()=>setShowLogin(true)}>sign in</button>:
            <div className='navbar-profile'>
                <img src={assets.profile_icon}/>
                <ul className='nav-profile-dropdown'>
                  <li><img src={assets.bag_icon}/><p>Orders</p></li>
                   <hr/>
                  <li onClick={logout}><img src={assets.logout_icon}/><p>Logout</p></li>
                </ul>
            </div>
           }
       </div>
    </div>
  )
}

export default Navbar
