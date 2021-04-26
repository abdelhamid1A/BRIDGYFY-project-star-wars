import React from 'react'
import Header from './Header'
import Section from './Section'
import OneProduct from './OneProduct'
import Footer from './Footer'
import {BrowserRouter,Switch,Route} from 'react-router-dom';

export default function Hoc() {
    return (
        <div className="App">
            <div className="op">
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Section} />
                    <Route exact path="/one-product/:index" component={OneProduct} />
                </Switch>
                <Footer/>
            </BrowserRouter>
            </div>
        </div>
    )
}
