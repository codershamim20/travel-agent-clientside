import React, { useEffect, useState } from 'react';
import Card from '../single-card/Card';

const ManageServices = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('https://aqueous-everglades-52543.herokuapp.com/servicesdata')
            .then(res => res.json())
     .then(data=>setCards(data))   
    }, [])
    const handleDelete = id => {
        const url = `https://aqueous-everglades-52543.herokuapp.com/servicesdata/${id}`
        fetch(url, {
          method:"DELETE"
        })
          .then(res => res.json())
          .then(data => {
              console.log(data);
              if (data.deletedCount) {
                  alert("Deleted successfully")
                const remaining = cards.filter(service => service._id !== id);
                setCards(remaining);  
              }
              
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