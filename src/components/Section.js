import React,{useState,useEffect} from 'react'
import Article from './Article'
import axios from 'axios'

export default function Section() {
    const [starShips,setStarShips] = useState([])
    console.log(process.env.REACT_APP_API_URL);
    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL+'starships/?page=1')
        .then(response=>{
            setStarShips(response.data.results);
            console.log(response.data.results);
        })
        .catch(err=>{
            console.log(err);
        })
    }, [])
    return (
        <div className="container mt-5">
            <div className="row ">
                <div className="container BOXC">
                    {starShips && starShips.map((item,index)=>(
                        <Article data={item} key={index} index={index}/>
                    ))}
                    {/* <div className="box col-md-6">
                        <div className="top-left"></div>
                        <div className="bottom-right"></div>
                        <div className="box-text">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, rerum? Suscipit, maxime delectus vero sint numquam deserunt cumque, qui in maiores recusandae ad. Quibusdam illum aspernatur expedita iste dolores voluptate.</p>
                        </div>
                    </div>
                    <div className="box ">
                        <div className="top-left"></div>
                        <div className="bottom-right"></div>
                        <div className="box-text">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, rerum? Suscipit, maxime delectus vero sint numquam deserunt cumque, qui in maiores recusandae ad. Quibusdam illum aspernatur expedita iste dolores voluptate.</p>
                        </div>
                    </div>
                    <div className="box ">
                        <div className="top-left"></div>
                        <div className="bottom-right"></div>
                        <div className="box-text">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, rerum? Suscipit, maxime delectus vero sint numquam deserunt cumque, qui in maiores recusandae ad. Quibusdam illum aspernatur expedita iste dolores voluptate.</p>
                        </div>
                    </div>
                    <div className="box ">
                        <div className="top-left"></div>
                        <div className="bottom-right"></div>
                        <div className="box-text">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, rerum? Suscipit, maxime delectus vero sint numquam deserunt cumque, qui in maiores recusandae ad. Quibusdam illum aspernatur expedita iste dolores voluptate.</p>
                        </div>
                    </div> */}

                </div>

            </div>
        </div>
    )
}
