import React, { useState } from 'react'
import './Navbar.css'
import plusLogo from '../icon/plusicon.svg'
import orderLogo from '../icon/ordericon.svg'
import wishLogo from '../icon/wishlisticon.svg'
import rewardLogo from '../icon/rewardicon.svg'
import giftLogo from '../icon/gifticon.svg'
import notificationLogo from '../icon/notificationicon.svg'
import customerLogo from '../icon/custmericon.svg'
import advertiseLogo from '../icon/advertiseicon.svg'
import downloadLogo from '../icon/downloadicon.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faAngleDown,faCartShopping,faClockRotateLeft,faCircleUser,faBars, faSearch } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  
  const [recent_array,setArray]=useState(["Mobile","Sarees"])
  const [currentSearch,setSearch]=useState("")
  const [mobilemenuCheck,setCheck]=useState(true)
  const [showMobileSearch,setMS]=useState(false)
  const [showMoreSearch,setMore]=useState(false)
  const changeMobileMenu=()=>{
    setCheck(!mobilemenuCheck)
  }
  // const changeSearch=(event)=>{
  //   setSearch(event.target.value)
  // }
  const formSubmit=(event)=>{
    event.preventDefault()
    if(currentSearch!==""){
      if(recent_array.includes(currentSearch)){
        return;
    }
   else{
     console.log(recent_array)
     setArray([...recent_array,currentSearch])
   }
    }
   
  }
  return (
    <header>
    
    <div className='logo-container'>
      <div className="logo" >
        <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="" />
      </div>
     <div className="explore">
        <a href="https://www.flipkart.com/plus">
      <p>Explore <span className='plus-icon'>Plus</span></p>
      <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" alt="" />
      </a>
      </div>
    </div>
    <div className="search-container">
      <form onSubmit={formSubmit}>
       <input type="text" placeholder='Search for products, brands and more' onChange={e=>{setSearch(e.target.value)}} name="input" autoComplete='off'/>
       </form>
       <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" onClick={formSubmit}/>
       <div className="recent-search">
        
        {recent_array.map((element,index)=>{
          
          return(
            <div key={index} className="recent-list" >
            <FontAwesomeIcon icon={faClockRotateLeft} className="recent-list-icon" />
            <p>{element}</p>
             </div>
          )
        })}
       
       </div>
    </div>
    <div className="login-btn-container">
        <a href="#">Login</a>
        <div className="login-menu">
         <div className="login-menu-list">
            <div className="login-menu-top">
              <p>New Customer?</p>
              <a href="">Sign Up</a>
            </div>
            <div className="menu-link">
              <a href="https://www.flipkart.com/travel/flights?param=DTNavIcon&fm=neo%2Fmerchandising&iid=M_75918655-51eb-4f3b-835a-0639bea5d772_1_372UD5BXDFYS_MC.V4ZPKTOAO321&otracker=hp_rich_navigation_7_1.navigationCard.RICH_NAVIGATION_Travel_V4ZPKTOAO321&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_7_L0_view-all&cid=V4ZPKTOAO321">
              <FontAwesomeIcon icon={faCircleUser} className="menu-link-icon"/>
              <p>My Profile</p>
              </a>
              <a href="#">
                <img src={plusLogo} alt="" className='menu-link-icon'/>
                <p>Flipkart Plus Zone</p>
              </a>
              <a href="#">
                <img src={orderLogo} alt="" className='menu-link-icon'/>
                <p>Orders</p>
              </a>
              <a href="#">
                <img src={wishLogo} alt="" className='menu-link-icon'/>
                <p>Wishlist</p>
              </a>
              <a href="#">
                <img src={rewardLogo} alt="" className='menu-link-icon'/>
                <p>Rewards</p>
              </a>
              <a href="#">
                <img src={giftLogo} alt="" className='menu-link-icon'/>
                <p>Gift Cards</p>
              </a>
            </div>
         </div>
        </div>
    </div>
    <a className='link' href="https://seller.flipkart.com/sell-online/">
        Become a Seller
    </a>
   <div className="more">
      More <FontAwesomeIcon icon={faAngleDown}  className="more-icon"/>
      <div className="more-menu">
        <div className="more-menu-list">
           <div className="more-link">
            <a href="#">
              <img src={notificationLogo} alt="" />
              <p>Notification Preferences</p>
            </a>
            
            <a href="#">
              <img src={customerLogo} alt="" />
              <p>24X7 Customer Service</p>
            </a>
            <a href="#">
              <img src={advertiseLogo} alt="" />
              <p>Advertise</p>
            </a>
            <a href="#">
              <img src={downloadLogo} alt="" />
              <p>Download App</p>
            </a>
            </div>       
        </div>
      </div>
   </div>
   <a href="https://www.flipkart.com/viewcart?exploreMode=true&preference=FLIPKART" className="cart-link-tag">
   <div className="cart" >
   <FontAwesomeIcon icon={faCartShopping}  className="cart-icon"/>
    <p>Cart</p> 
   </div>
   </a>
         <div className="mobile-menu" onClick={changeMobileMenu}>
          <FontAwesomeIcon icon={faBars}/>
         </div>
         <div className={mobilemenuCheck?"mobile-menu-list":"no-display"}>
           <ul className='mobile-menu-ul'>
             <li className='mobile-menu-li' onClick={e=>{setMS(!showMobileSearch)}}> Search<FontAwesomeIcon icon={faAngleDown} className="mobile-angle-down"/></li>
             <div className={showMobileSearch?"search-dropdown":"no-display"}>
              <div className="mobile-search-container">
                <input type="text" placeholder='search' className='mobile-menu-input'/>
                <FontAwesomeIcon icon={faSearch} className="mobile-search-icon" />
              </div>
             </div>
            <li className='mobile-menu-li'><a href='#' className='mobile-link'>Become a Seller</a></li>

            <li className='mobile-menu-li' onClick={e=>{setMore(!showMoreSearch)}}>More <FontAwesomeIcon icon={faAngleDown} className="mobile-angle-down"/></li>
            <div className={showMoreSearch?"more-dropdown":"no-display"}>
              <p><a>Notification Preferences</a></p>
              <p><a>24*7 Customer Service</a></p>
              <p><a>Advertise</a></p>
              <p><a>Download App</a></p>
            </div>
            <div className="mobile-menu-li">
              <a>Cart</a>
            </div>
            <li></li>
           </ul>
         </div>
    </header>
  )
}

export default Navbar
