import React, { useState } from 'react'

import "./Register.css"
import { SERVER_URL } from "../App"
import axios from 'axios';

const RegisterPage = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const res = await axios.post(`${SERVER_URL}/register`, {
           username,
          email,
          password
        })
        // console.log(res.data.message)
        alert(res.data.message)
        // console.log(res)
  
      } catch (error) {
       // console.log(error.response.data)
       alert(error.response.data)
       //console.log(error)
      }
  
    }

  return (
    <div>
      <div className="register"    >
      <span className="registerTitle">Register</span>
      <form className="registerFarm" onSubmit={handleSubmit}
      >
        <label>Username</label>
        <input type="text" placeholder="Enter your username...."
          onChange={(e) => setUsername(e.target.value)} />
        <label>Email</label>
        <input type="email" placeholder="Enter your email...."
          onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input type="password" placeholder="Enter your password...."
          onChange={(e) => setPassword(e.target.value)} />
        <button type='submit' className="registe-btn">Register</button>
      </form>
      {/* <Link to="/login" style={{ textDecoration: "none" }} >
        <button className="logi-btn">Login</button>
      </Link> */}

    </div>

    </div>
  )
}

export default RegisterPage
