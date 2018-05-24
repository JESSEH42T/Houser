import React from 'react'


function House(props){  
        return(
            <div className='house'  >
                <div id='house_detail_box' >
                    <p>Property Name: {props.details.name} </p> 
                    <p>Address: {props.details.address}</p>
                    <p>City: {props.details.city}</p>
                    <p>State: {props.details.state}</p>
                    <p>Zip:  {props.details.zip} </p>
                 <button className="house_delete_button" onClick={()=>props.delete(props.details.id)} >Delete</button>
                </div>
            </div>
        )
    }
export default House;