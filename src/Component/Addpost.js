import React, { useState } from 'react'
import Headrer from './Headrer'

const Addpost = () => {
    var [title,setTitle]=useState("")
    var[Message,setMessage]=useState("")
    const subData=()=>{
        const data={"title":title,"message":Message}
        console.log(data)

    }
  return (
    <div>
        <Headrer/>
        <div className="container">
    <div className="row g-2">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl6">
                    <label for="" className="form-label">Title</label>
                    <input onChange={(e)=>setTitle(e.target.value)} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <textarea onChange={(e)=>setMessage(e.target.value)} name="" id="" cols="30" rows="10" class="form-label">Message</textarea>
                  
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={subData} className="btn btn-success">Submit</button>
                </div>
            </div>
        </div>
    </div>
</div></div>
  )
}

export default Addpost