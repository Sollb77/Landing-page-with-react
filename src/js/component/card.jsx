

import React from 'react';

const Card = (prop) => {
   return ( 
    <div className=' d-flex float-start  ms-5 justify-content-around '>
    <div className="card" style={{width: "18rem"}}>
    <img src="https://encolombia.com/wp-content/uploads/2021/12/Que-es-paisaje.jpg" className="card-img-top" />
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    </div>
   )
    }
 
 

  export default Card;