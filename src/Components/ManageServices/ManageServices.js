import React, { useEffect, useState } from 'react';
import Card from '../single-card/Card';

const ManageServices = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('https://serene-escarpment-20453.herokuapp.com/services')
            .then(res => res.json())
     .then(data=>setCards(data))   
    }, [])
    const handleDelete = id => {
        const url = `https://serene-escarpment-20453.herokuapp.com/services/${id}`
        fetch(url, {
          method:"DELETE"
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            // const remaining=props.filter
        })
      }
    return (
        <div>
            <h2 className="text-center">Manage Services</h2>
            {
                cards.map(card => <div className='text-center my-5' key={Card._id}>
                    <h3 >{card.services}</h3>
                    <button onClick={()=>handleDelete(card._id)} className="btn btn-danger mx-5">Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;