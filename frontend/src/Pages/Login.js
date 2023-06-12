import React, { useState } from 'react';
import axios from "axios"
import { useCookies} from "react-cookie";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [_, setCookies]= useCookies(["access_token"]);

const navigate = useNavigate();

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
       const res = await axios.post("http://localhost:6000/auth/login", {
            username, 
            password,
        });
        setCookies("access_token", res.data.token);
        window.localStorage.setItem("userID", res.data.userID);
        navigate("/");
        
    } catch (error) {
        
    }
  };


  return (
    <div className='auth-container'>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className='form-group'>
          <label htmlFor='username'>Username</label>
          <input type='text' id='username' value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input type='text' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;
