"use client"

import React, { useState } from "react"
import { useRouter } from 'next/navigation'

export default function Register() {

    const [first_name, setFirst_name] = useState('')
    const [last_name, setLast_name] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const handleSubmit = async () => {
        console.log(first_name, last_name, email, password)
        //posting user data
        let result = await fetch('http://localhost:8001/register', {
            method: 'post',
            body: JSON.stringify({first_name, last_name, email, password}),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if(result) {
            router.push('/login')
        } else {
            console.log('Please enter connect details.')
        }

        console.log(result) 
    }

    return (
      <div>
            <input type="text" placeholder="First Name" onChange={(e) => setFirst_name(e.target.value)} />
            <input type="text" placeholder="Last Name" onChange={(e) => setLast_name(e.target.value)} />
            <input type="text" placeholder="user or email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button type="button" onClick={handleSubmit}>Login</button>
      </div>
    )
  }
  