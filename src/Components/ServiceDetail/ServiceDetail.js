import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useFirebase from '../../hooks/useFirebase';


const ServiceDetail = () => {
    
    const { id } = useParams();
  const { user } = useFirebase();
  // console.log(user)
    const [cards , setCards] = useState([]);
    useEffect(() => {
        fetch(`https://aqueous-everglades-52543.herokuapp.com/servicesdata/${id}`)
            .then(res => res.json())
        .then(data=>setCards(data))
    },[])
    return (
        <div className="col-md-12 ">
            <div className="card mb-3 h-100 bg-info" >
          <div className="row text-center ">
            <h2>Welcome Mr. {user.displayName}</h2>
            <h4>{user.email}</h4>
          
            <div className="col-md-12 text-center p-5">
            <img src={cards.img} className=" img-fluid rounded mx-auto d-block" width="290px" height="200px" alt="..."/>
      <div className="card-body">
      <h1 >This is service Detail Page </h1>
        <h5 className="card-title"> {cards.services}</h5>
        <p className="card-text">Country: {cards.country} </p>
        <p className="card-text">Customer Rating: {cards.rating} star </p>                
      </div>
    </div>
  </div>
</div>
        </div>
        
    );
};

export default ServiceDetail;