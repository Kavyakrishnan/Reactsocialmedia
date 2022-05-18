import React from 'react'

const Searchbuuton = () => {
    var [name,setName]=useState("kavya")
    const changeName=()=>{


        setName(
            name="appu"
        )
        }
  return (
    
  
    <div>
        {name}
        <button onClick={changeName} className="btn btn-success">Search</button>
   </div> 
  )
}

export default Searchbuuton