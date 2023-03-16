"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {

  const router = useRouter()

  const Logout = () => {
      if( typeof window !== 'undefined' ) {
        localStorage.clear()
      }
      router.push('/login')
  }

  useEffect(() => {
    const auth = localStorage.getItem('user')
    if (!auth && router.pathname !== '/login') {
      router.push('/login')
    }
  }, [router.pathname])

  return (
    <>
      <button type='submit' onClick={Logout}>Logout</button>
    </>
  )
}
