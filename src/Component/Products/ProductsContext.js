import React, { createContext, useState } from 'react';
import outprojucts_th1 from '../images/outprojucts_th1.jpg';
import outprojucts_th2 from '../images/outprojucts_th2.jpg';
import outprojucts_th3 from '../images/outprojucts_th3.jpg';
import outprojucts_th4 from '../images/outprojucts_th4.jpg';

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
    const [products] = useState ([
        {id: 1, name:'Vishnu Singh', price: 300, image: outprojucts_th1, status:'hot'},
        {id: 2, name:'Vishnu Singh2', price: 500, image: outprojucts_th2, status:'new'},
        {id: 3, name:'Vishnu Singh3', price: 700, image: outprojucts_th3, status:'hot'},
        {id: 4, name:'Vishnu Singh4', price: 900, image: outprojucts_th4, status:'new'}
    ])
    return(
        <ProductsContext.Provider value ={{products: [...products]}}>
            {props.children}
        </ProductsContext.Provider>
    )
}

export default ProductsContextProvider;