"use client"
import Navbar from "@/components/organisms/Navbar/Navbar"
import { useState } from "react"

function test() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (values) => {
    console.log("Email:", values.email);
    console.log("Password:", values.password);
  };

  return (
    <>
        <Navbar />
        <div>
            <form>
              <input type="text" name="email" placeholder="email" value={email} onChange={handleEmailChange} /> 
              <input type="password" name="password" placeholder="password" value={password} onChange={handlePasswordChange} /> 
              <button onClick={(e) => handleSubmit({email, password})} type="button">Tester</button>
            </form>
        </div>
    </>
  )
}

export default test