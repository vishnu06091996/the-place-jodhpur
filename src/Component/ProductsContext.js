import React, { createContext, useState } from 'react';
import latest_rt_img1 from './images/latest_rt_img1.jpg';

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
    const [products] = useState ([
        {id: 1, colhedding:'Vishnu Singh', price: 300, image:latest_rt_img1, status:'hot'},
        {id: 1, colhedding:'Vishnu Singh', price: 300, image:latest_rt_img1, status:'hot'},
        {id: 1, colhedding:'Vishnu Singh', price: 300, image:latest_rt_img1, status:'hot'},
        {id: 1, colhedding:'Vishnu Singh', price: 300, image:latest_rt_img1, status:'hot'},
        {id: 1, colhedding:'Vishnu Singh', price: 300, image:latest_rt_img1, status:'hot'},
        {id: 1, colhedding:'Vishnu Singh', price: 300, image:latest_rt_img1, status:'hot'},
        {id: 1, colhedding:'Vishnu Singh', price: 300, image:latest_rt_img1, status:'hot'}
    ])
    return(
        <ProductsContext.Provider value ={{products: [...products]}}>
            {props.children}
        </ProductsContext.Provider>
    )
}

export default ProductsContextProvider;