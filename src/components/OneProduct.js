import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function OneProduct(props) {
    const [oneShip, setOneShip] = useState([])
    const index= props.match.params.index
    const {name,manufacturer,created,model,cost_in_credits} = oneShip
    function towLetter(name){
        if(name){

            return name.slice(0,2)
        }
    }
    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL + 'starships/?page=1')
            .then(response => {
                setOneShip(response.data.results[index]);
                console.log(response.data.results[index]);
                
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    return (
        <div className="d-flex justify-content-center mt-5">
            {oneShip ?
                <div className="d-flex justify-content-center">
                    <div className="name mb-5" >
                        <h1>{towLetter(name)}</h1>
                    </div>
                    <div className="product mt-5">
                        <div className="product-top-left"></div>
                        <div className="product-bottom-right"></div>

                        <div className="box-text mt-3">
                        {manufacturer} 
                        {created} 
                        {model} 
                        {cost_in_credits}
                        </div>
                    </div>
                </div>

                : ''}
        </div>
    )
}
