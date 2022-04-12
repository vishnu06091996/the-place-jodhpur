import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Collectionnew() {
    return (
        <section className="Whats_new">
            <h1 className="center text-uppercase">What's New at The Palace Collection</h1>
            <div className="Whats_in">
            <OwlCarousel className='owl-theme'  item={3} loop margin={25} nav>
                <div className="Whats_bx item">
                    <a href="#" className="events_img"><img src={require ('./images/events_img.jpg').default} alt="" /></a>
                    <div className="evnt_txbx">
                        <div className="vn_date">
                            <a href="#" className="evnt_txA">Event</a>
                            <a href="#" className="evnt_txDate">15.08.19</a>
                        </div>
                        <div className="evn_tx">
                            <a href="#" className="evn_tx_hd">Peacock in the Desert :The Royal Arts of Jodhpur, India</a>
                        </div>
                    </div>
                </div>
                <div className="Whats_bx item">
                    <a href="#" className="events_img"><img src={require ('./images/events_img2.jpg').default} alt="" /></a>
                    <div className="evnt_txbx">
                        <div className="vn_date">
                            <a href="#" className="evnt_txA">Event</a>
                            <a href="#" className="evnt_txDate">15.08.19</a>
                        </div>
                        <div className="evn_tx">
                            <a href="#" className="evn_tx_hd">Fun and Frolic in the Royal Gardens of Nagaur</a>
                        </div>
                    </div>
                </div>
                <div className="Whats_bx item">
                    <a href="#" className="events_img"><img src={require ('./images/events_img3.jpg').default} alt="" /></a>
                    <div className="evnt_txbx">
                        <div className="vn_date">
                            <a href="#" className="evnt_txA">Event</a>
                            <a href="#" className="evnt_txDate">15.08.19</a>
                        </div>
                        <div className="evn_tx">
                            <a href="#" className="evn_tx_hd">Rajput Arms and Armour, The Rathores and Their Armoury at Jodhpur Fort</a>
                        </div>
                    </div>
                </div>
                </OwlCarousel>;
            </div>
        </section>
    )
}

export default Collectionnew;
