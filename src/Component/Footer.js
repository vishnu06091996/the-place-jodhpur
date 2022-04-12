import React from 'react';

const Footer = () =>{
    return(
        <footer>
           <div className="container">
                <div className="footer_menu_mn">
                    <div className="ftr_bx ftr_bx2">
                        <h4>The Palace Collection</h4>
                        <ul className="footer_menu">
                            <li><a href="javascript:;">About Us</a></li>
                            <li><a href="javascript:;">Career</a></li>
                            <li><a href="javascript:;">Media</a></li>
                            <li><a href="javascript:;">Blog</a></li>
                            <li><a href="javascript:;">Testimonials</a></li>
                            <li><a href="javascript:;">Contact</a></li>
                        </ul>
                    </div>
                    <div className="ftr_bx ftr_bx3">
                        <h4>Customer Services</h4>
                        <ul className="footer_menu">
                            <li><a href="javascript:;">FAQs</a></li>
                            <li><a href="javascript:;">My Account</a></li>
                            <li><a href="javascript:;">Delivery</a></li>
                            <li><a href="javascript:;">Cancellation</a></li>
                            <li><a href="javascript:;">Support Us</a></li>
                        </ul>
                    </div>
                    <div className="ftr_bx ftr_bx4">
                        <h4>Collections</h4>
                        <ul className="footer_menu">
                            <li><a href="javascript:;">Collections</a></li>
                            <li><a href="javascript:;">Jodhpur Polo</a></li>
                            <li><a href="javascript:;">Polo Pups</a></li>
                            <li><a href="javascript:;">Jodhpur Flying Club</a></li>
                            <li><a href="javascript:;">Princes Vaar Collections</a></li>
                        </ul>

                        <ul className="footer_menu footer_menu2">
                            <li><a href="javascript:;">Ranvas</a></li>
                            <li><a href="javascript:;">Royal Camps</a></li>
                            <li><a href="javascript:;">The Courtyard</a></li>
                            <li><a href="javascript:;">Jodhpore</a></li>
                        </ul>
                        
                    </div>
                    <div className="ftr_bx ftr_bx5">
                        <h4>Contact Us</h4>
                        <p>Umaid Bhawan Palace<br />Jodhpur, Rajasthan 342006, India</p>
                        <p><a href="javascript:;">info@thepalacecollection.com</a></p>
                    </div>
                </div>
            </div>

            <div className="ftr2">
                <div className="container">
                    <div className="ftr2_in">
                        <div className="ftr2_lt">
                            <a href="javascript:;">Returns Policy</a>
                            <a href="javascript:;">Privacy Policy </a>
                            <a href="javascript:;">Terms & Conditions</a>
                        </div>
                        <div className="ftr2_cntr"><img src={require ('./images/ftr_logo.png').default} alt="ftr_logo" /></div>
                        <div className="ftr2_rt">
                            <a href="javascript:;">facebook</a>
                            <a href="javascript:;">instagram</a>
                            <a href="javascript:;">twitter</a>
                            <a href="javascript:;">pinterest</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ftr3">
                <div className="container">
                    <div className="ftr2_in">
                        <div className="ftr2_lt">
                            <p>@ 2021 The Palace Collection. All rights reserved.</p>
                        </div>
                        <div className="ftr2_rt">
                            <a href="https://www.csipl.net/" target="_blank">Made, with love, by CSIPL</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
 export default Footer;
