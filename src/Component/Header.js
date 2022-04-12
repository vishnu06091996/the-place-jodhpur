import React, { useState} from 'react';
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';

const Header = () =>{
    const [click, setClick] = useState(false);
    const handleClick =() => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const [navbar, setNavbar] = useState(false)



    // const navbarTopClick = () => setClick(!click);

    const handleClickhide = () => {
        if (window.innerWidth <= 960) {
            setClick(false);
        } else {
            setClick(true);
        }
    };

    const scrollHeader = () =>{
        if(window.scrollY >= 50){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', scrollHeader);

    return(
        <header className={navbar ? "navbar Header_Fix"  : "TopHeader"}>
            <div className="header_in">
                <Link className="logo"><img src={require ('./images/logo.png').default} alt="" /></Link>
                <div className="header_rt">
                    <div className={click ? 'navbarTopActive' : "navbarTopdv"}>
                        <div className="navbarTop">
                            <ul>
                                <li className="navbar_li"><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
                                <li className="navbar_li"><Link to="/ProductListing" onClick={closeMobileMenu}>Products</Link></li>
                                <li className="navbar_li"><Link to="/" onClick={closeMobileMenu}>About us</Link></li>
                                <li className="navbar_li"><Link to="/" onClick={closeMobileMenu}>Contect Us</Link></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="login_hder">
                        <a href="javascript:;" className="login_bx logins_icons"><img src={require ('./images/login_icon.png').default} alt="" /></a>
                        <a href="javascript:;" className="cart_bx logins_icons">
                            <img src={require ('./images/cart_icon.png').default} alt="" />
                            <span className="cart_no">2</span>
                        </a>
                        <select className="login_select logins_icons">
                            <option>45</option>
                        </select>
                        <a href="javascript:;" className="search_bx logins_icons">
                            <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0)">
                            <path d="M24.5283 28.0604C17.2189 33.1132 7.99624 31.2 3.13964 24.8717C-1.56979 18.7396 -0.932057 9.90942 4.61134 4.46414C10.2528 -1.07926 18.9849 -1.52077 25.1661 3.43395C31.2981 8.33961 32.9661 17.366 27.9623 24.6264C28.1095 24.7245 28.3547 24.7736 28.5019 24.9698C31.6906 28.1585 34.8793 31.3472 38.0679 34.5358C38.8528 35.3207 39.1472 36.2038 38.8038 37.234C38.2642 39 36.0566 39.6377 34.634 38.3623C34.3887 38.166 34.1925 37.9207 33.9962 37.7245C31.0038 34.683 27.9623 31.6415 24.9208 28.5509C24.7736 28.4038 24.6755 28.2566 24.5283 28.0604ZM15.4038 27.3245C21.9283 27.3245 27.2755 22.0755 27.3245 15.5509C27.3245 8.97734 22.0755 3.63017 15.5019 3.63017C8.97738 3.63017 3.63021 8.87923 3.58115 15.4038C3.58115 21.9773 8.87926 27.3245 15.4038 27.3245Z"/>
                            </g>
                            <defs>
                            <clipPath id="clip0">
                            <rect width="39" height="39" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </a>
                    </div>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                </div>
            </div> 
        </header>
    )
}
 export default Header;