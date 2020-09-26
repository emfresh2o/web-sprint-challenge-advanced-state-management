import React from "react";

const SmurfsCard = (props) =>{
    const handleUpdate = e => {

    }
    const handleDelete = e => {

    }
    return (
        <div>
           <h2>{props.smurf.name}</h2>
           <h3>{props.smurf.age}</h3>
           <h3>{props.smurf.height}</h3>
           <button onClick={handleUpdate}> Update Smurf!</button>
           <button onClick={handleDelete}> Delete Smurf!</button>
        </div>
    )
}

export default SmurfsCard