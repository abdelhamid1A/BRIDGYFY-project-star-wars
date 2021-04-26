import React from 'react'
import img from '../Rectangle 26.png'


export default function Header() {
    return (

        <div>

            <div className="headerTop ">
                <img src={img} alt="" className="my-3" />
                <h1 className="title" >FRoNT END tESt</h1>
            </div>
            {/* <div className="dropdown-divider"></div> */}
            <div className="global-search float-end d-flex justify-content-center">
                <div className="float-end search search-box" htmlFor="search">
                    <div className="search-top-left"></div>
                    <div className="search-bottom-right"></div>
                    <div className="inp">
                        <input type="text" placeholder='search' name="search"/>  
                    </div>
                </div>
            </div>
            <div className="borde-B"></div>
        </div>

    )
}
