import React, { useState } from 'react'
import Headrer from './Headrer'

const Searchpost = () => {
    var [title,setTitle]=useState("kavya")
    const subData=()=>{
        const data={"title":title}
        console.log(data)


        
        }
  return (
    <div>
        <Headrer/>
        <div className="container">
    <div className="row g-2">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-2">
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl6">
                    <label for="" className="form-label">Title</label>
                    <input onChange={(e)=>setTitle(e.target.value)} type="text" className="form-control"/>
                </div>
               
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
               
        <button onClick={subData} className="btn btn-success">Search</button>
                </div>
            </div>
        </div>
    </div>
</div></div>
  )
}

export default Searchpost