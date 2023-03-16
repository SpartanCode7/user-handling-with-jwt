"use client"

import React, { useState } from "react"
import { useRouter } from 'next/navigation'

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const handleSubmit = async () => {
        console.log(email, password)
        //posting user data
        let result = await fetch('http://localhost:8001/login', {
            method: 'post',
            body: JSON.stringify({email, password}),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        result = await result.json()
        console.log(result)
        
        if(result) {
            localStorage.setItem('user', JSON.stringify(result))
            router.push('/')
        } else {
            console.log('Please enter connect details.')
        }
    }

    return (
      <div>
            <input type="text" placeholder="user or email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button type="button" onClick={handleSubmit}>Login</button>
      </div>
    )
  }
  