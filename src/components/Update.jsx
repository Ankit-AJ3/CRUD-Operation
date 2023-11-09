import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const Update = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
    
},[]
  )

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log("Id...",id);
            axios.put(`https://654c88b977200d6ba858f72c.mockapi.io/crud-ankit/${id}`,
            {
                name: name,
                email: email,
            }).then(()=>{
                navigate("/read");
            })
    }
  return (
    <div>
      <h2>Update</h2>
      <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label" >Email</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
    <input type="name" className="form-control" 
    value={name}
        onChange={(e) => setName(e.target.value)}
    />
  </div>
  <button type="submit" className="btn btn-primary mx-2" onClick={handleUpdate}>Update</button>
  <Link to="/read">
  <button type="submit" className="btn btn-warning mx-2">Back</button>
  </Link>
</form>
    </div>
  )
}


export default Update
