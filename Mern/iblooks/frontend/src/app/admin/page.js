import Heading from '@/components/atoms/Heading/Heading'
import Footer from '@/components/organisms/Footer/Footer'
import Login from '@/components/organisms/Login/Login'
import Navbar from '@/components/organisms/Navbar/Navbar'

function page() {
  return (
    <div>
        <Navbar />
        <Heading level='1' children="Admin" />
        <Login />
        <Footer />
    </div>
  )
}

export default page

