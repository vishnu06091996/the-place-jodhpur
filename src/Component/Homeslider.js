import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class Homeslider extends Component{
    render(){
        return(
            <div className="BannerSlider">
                <OwlCarousel  items={1} className='owl-theme' loop margin={0}  nav>
                    <div className='item'>
                        <div className="banner">
                            <img src={require ('./images/banner.jpg').default } alt="" class="img" />
                            <div className="explore_more">
                                <a href="javascript:;"><img src={require ('./images/explore_more.png').default} alt="" /></a>
                            </div>
                            <div className="bnr_tx">
                                <span className="plc_cl_icon"><img src={require ('./images/plc_cl_icon.png').default} alt="" style={{width:"auto", display:"inline-block"}} /></span>
                                <h1 className="Palace_tx">The Palace Collection Jodhpur</h1>
                                <h4 className="Palace_tx2">The most beautiful things in the realm...</h4>
                            </div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className="banner">
                            <img src={require ('./images/banner.jpg').default } alt="" class="img" />
                            <div className="explore_more">
                                <a href="javascript:;"><img src={require ('./images/explore_more.png').default} alt="" /></a>
                            </div>
                            <div className="bnr_tx">
                                <span className="plc_cl_icon"><img src={require ('./images/plc_cl_icon.png').default} alt="" style={{width:"auto", display:"inline-block"}} /></span>
                                <h1 className="Palace_tx">The Palace Collection Jodhpur</h1>
                                <h4 className="Palace_tx2">The most beautiful things in the realm...</h4>
                            </div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className="banner">
                            <img src={require ('./images/banner.jpg').default } alt="" class="img" />
                            <div className="explore_more">
                                <a href="javascript:;"><img src={require ('./images/explore_more.png').default} alt="" /></a>
                            </div>
                            <div className="bnr_tx">
                                <span className="plc_cl_icon"><img src={require ('./images/plc_cl_icon.png').default} alt="" style={{width:"auto", display:"inline-block"}} /></span>
                                <h1 className="Palace_tx">The Palace Collection Jodhpur</h1>
                                <h4 className="Palace_tx2">The most beautiful things in the realm...</h4>
                            </div>
                        </div>
                    </div>
                    
                </OwlCarousel>
            </div>
        )
    }
}

export default Homeslider;