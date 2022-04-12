import React from 'react';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const Gloriousfeats = () =>{
    return(
        <div className="Gloriousfeats">
        <div className="container">
            <div className="the_Story text-right">Glorious feats</div>
            <div className="GloriousfeatsSL">
                <OwlCarousel className='owl-theme'  items={1} loop  nav>
                    <div className="Glorious_in d-flex item">
                        <div className="Glorious_lt">
                            <div className="sml_img"><img src={require ('./images/sml_img.jpg').default} alt="" className="img" /></div>
                            <div className="big_img"><img src={require ('./images/big_img1.jpg').default} alt="" className="img" /></div>
                        </div>

                        <div className="Glorious_rt">
                            <h1 className="JODHPUR_hd">JODHPUR  POLO </h1>
                            <p className="Glorious_p">The year was 1925<br />The place was England<br />The game was polo</p>
                            <p className="Glorious_p2">And the Jodhpur Team had taken the place by storm</p>
                            <h4 className="MUSTARD_hd">"HOT AS MUSTARD" </h4>
                            <p className="">screamed Tatler, <br />And all of Europe was charmed. </p>
                            <div className="ShopNow_div">
                                <a href="#" className="ShopNow_btn">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>

            </div>
        </div>
    </div>
    )
}

export default Gloriousfeats;