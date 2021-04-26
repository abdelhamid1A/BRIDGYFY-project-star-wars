import React from 'react'
import { Link } from 'react-router-dom';

export default function Article(props) {
    const { data,index } = props
    return (
        <div className="box row">
            <div className="top-left"></div>
            <div className="bottom-right"></div>
            <div className="col-md-4 img-thump d-flex align-items-center">{data.name.slice(0,3)}</div>
            <div className="box-text col-md-8 p-2">
                <p>{data.manufacturer}</p>
            </div>
            <div className="col-md-12">

                <Link className="float-end link-show-more" to={{
                    pathname: "/one-product/"+index
                }}>show more</Link>
            </div>
        </div>
    )
}
