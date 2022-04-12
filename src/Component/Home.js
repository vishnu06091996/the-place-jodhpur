import React from 'react';
import Homeslider from  './Homeslider';
import Thestory from './Thestory';
import Collection from './Collection';
import Collectionnew from './Collectionnew';
import Gloriousfeats from './Gloriousfeats';
import Products from './Products';
import ProductsContextProvider from './ProductsContext';
import Collectiondescover from './Collectiondescover'


const Home = () =>{
    return(
        <div>
            <Homeslider />
            <section className="story_scn">
                <Thestory />
                <Collection />
                <ProductsContextProvider>
                    <Products />
                </ProductsContextProvider>
                <Gloriousfeats />
            </section>
            
            <Collectionnew />
            <Collectiondescover />
        </div>
    )
}
export default Home;