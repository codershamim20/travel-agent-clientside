
import React, { useState } from 'react';

import { getAuth } from "firebase/auth";


import useFirebase from '../../hooks/useFirebase';



const Login = () => {
  const { googleSignIn } = useFirebase();
  
  const [message, setMessage] = useState('');
  const auth = getAuth();
  
    return (

        <div className="div d-flex justify-content-center align-items-center">
      <div className="row ">
          <div className="col-md-8 bg-light my-5">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIia12ciTXRDIYCZPyxkrsXw5Q2N3OpFgX4g&usqp=CAU" alt="" />
            <div>
               <h2 className="text-primary">Please Login With Google</h2>
              <div >
              <button
                onClick={googleSignIn}
                className="btn btn-warning mb-5" //giasuddin8334 giasu8334@gmail.com
              >Google Log in
              </button>
              
            </div>
          </div>
        </div>
        
      </div>
    </div>
    );
};

export default Login;