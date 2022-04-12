import React from 'react';
// import Products from './Products';
// import ProductsContextProvider from './ProductsContext';
import ProductItem from './ProductItem'
import { Link } from 'react-router-dom';


const ProductListing = () =>{
	return(
		<section className="story_scn InnerPage">
			<div className="Gloriousfeats Prods_listing_Glorious">
				<div className="container">
					<div className="the_Story text-right">Palace Exclusives</div>
					<div className="">
						<div className="Glorious_in d-flex">
							<div className="Glorious_lt">
								<div className="sml_img"><img src={require('../images/sml_img2.jpg').default} alt="" className="img" /></div>
								<div className="big_img"><img src={require('../images/big_img2.jpg').default} alt="" className="img" /></div>
							</div>

							<div className="Glorious_rt">
								<p className="Glorious_p">The history of Royal Jodhpur began in the early 13th century, with a Rathore Rajput warrior prince who migrated to western Rajasthan from the legendary kingdom of Kannauj. During the ensuing 800 years, the royal rulers of Jodhpur/Marwar became known for both their valour and their glamour, a reputation that remains intact today. <span className="gold_color">The ROYAL JODHPUR</span> products, based on painted images of some of the earliest Rathore Rajput maharajas, celebrate the lineage and the history of Jodhpur and its legendary royal rulers.</p>
							</div>
						</div>
					</div>
				</div>
			</div>


			<div className="products_listing_scn">
				<div className="container">
					<div className="row">
						<div className="col-md-4 col-sm-12 col-lg-3 Listing_lt_menu">
							<div className="Listing_lt_menu_in sticky-top sticky-offset">
								<h3>Shop By<br />Collection</h3>
								<ul className="leftMenu_ul">
									<li className="active"><Link to="#">Palace Exclusives</Link></li>
									<li className=""><Link to="#">Royal Jodhpur</Link></li>
									<li className=""><Link to="#">Jodhpur Polo</Link></li>
									<li className=""><Link to="#">Jodhpur Flying Club</Link></li>
									<li className=""><Link to="#">Treasures Of The Zenana</Link></li>
									<li className=""><Link to="#">Special Evenings</Link></li>
									<li className=""><Link to="#">The Men's Quarters</Link></li>
									<li className=""><Link to="#">Princess Vaara Collection</Link></li>
									<li className=""><Link to="#">Trending: Curl Up With A Good Book</Link></li>
								</ul>
							</div>
						</div>
						<div className="col-md-8 col-sm-12 col-lg-9 Listing_rt_div">
							<div className="row">
								<ProductItem />
							{/* <ProductsContextProvider>
								<Products />
							</ProductsContextProvider> */}
								<div className="col-ms-12 col-md-12 col-lg-12">
									<div className="listingLoader">
										<div className="loader">
											<div className="ball-pulse">
												<div></div>
												<div></div>
												<div></div>
											</div>
											<h6 className="LoadMore">Load More Products</h6>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ProductListing;