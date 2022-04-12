import React from 'react';
import Header from './Header'
import Footer from './Footer'
import Home from './Home';
import ProductListing from './Products/ProductListing';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './Global.css';
import './Custom.css';
import './Responsive.css';

class Layout extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/ProductListing" exact component={ProductListing} />
                    </Switch>
                    <Footer />
                </BrowserRouter>
            </div>
        )
    }
}

export default Layout;