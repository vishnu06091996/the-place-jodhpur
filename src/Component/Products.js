import React, { useContext } from 'react';
import { ProductsContext } from './ProductsContext';
import { Link  } from 'react-router-dom';


const Products = () =>{

    const { products } = useContext (ProductsContext);

    return(
        <div className="latest_Div">
            <div className="latest_lt">
                <h3>The latest from</h3>
                <h1>The Palace Collection</h1>
                <div className="latest_lt_tx">
                    <p>Discover all that's new, brilliant and <br />beautiful in the world of <br />The Palace Collection Jodhpur.</p>
                    <div className="ShopNow_div">
                        <a href="#" className="ShopNow_btn">Shop Now</a>
                    </div>
                </div>
            </div>

            <div className="latest_rt horizontal-scrollable">
                <div className="row">
                    
                    {products.map ((product) =>(
                        <div className="boste center"  key={product.id}>
                            <div className="latest_rt_bx">
                                <Link to="/" className="latest_rt_img"><img src={product.image} alt="" /></Link>
                                <div className="latest_rt_tx">
                                    <Link to="/">
                                        <h4 className="bx_hd">{product.colhedding}</h4>
                                        <h5 className="bx_tx"><i className="fa fa-inr" aria-hidden="true"></i> {product.price}</h5>
                                    </Link>
                                    {product.status === 'hot' ? <div className="hot">Hot</div> : ''}
                                    {product.status === 'new' ? <div className="new">New</div> : ''}
                                </div>
                                <div className="ta_tx_hvr">
                                    <Link to="/">
                                        <h4 className="bx_hd">{product.colhedding}</h4>
                                        <h5 className="bx_tx"><i className="fa fa-inr" aria-hidden="true"></i> {product.price}</h5>
                                    </Link>
                                    <div className="Add_wis_bx">
                                        <a href="#" className="AddToBag"><img src={require ('./images/AddToBag_icon.png').default} alt="" /> Add To Bag</a>
                                        <a href="#" className="AddToWishlist"><img src={require ('./images/AddToWishlist_icon.png').default} alt="" />Add To Wishlist</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <div className="clr"></div>
        </div>
    )
}

export default Products;