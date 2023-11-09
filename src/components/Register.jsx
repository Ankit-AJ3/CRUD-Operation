import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState ("");
    const [email, setEmail] = useState ("");
    const history = useNavigate ();

    const header = {"Access-Control-Allow-Origin": " * "};

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Clicked");
        axios.post("https://654c88b977200d6ba858f72c.mockapi.io/crud-ankit",
        {name : name, email: email, header})

        .then(() => {
            history("/read");
        })
        }

  return (
    <>
    <div className='d-flex justify-content-between m-2'>
        <h2>Create</h2>
        <Link to="/read">
        <button className='btn btn-primary'>Show Data</button>
        </Link>
    </div>
      <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
        onChange={(e) => setEmail(e.target.value)}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
    <input type="name" className="form-control" 
        onChange={(e) => setName(e.target.value)}
    />
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form>
    </>
  )
}

export default Register
