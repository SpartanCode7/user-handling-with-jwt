import Navbar from '@/components/organisms/Navbar/Navbar'
import React from 'react'
import Heading from "@/components/atoms/Heading/Heading"
import Forget from '@/components/organisms/Forget/Forget'

function page() {
  return (
    <div>
        <Navbar />
        <Heading level="1" children="Forget" />
        <Forget />
    </div>
  )
}

export default page