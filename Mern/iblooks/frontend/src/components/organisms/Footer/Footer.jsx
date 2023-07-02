import Link from 'next/link'

function Footer() {
  return (
    <div className="bg-primary">
        <div className='flex justify-between text-[#fff] container mx-auto py-4 px-5'>
            <div className="">
                <Link href="#">Logo</Link>
            </div>
            <div className="">
                <span>Brand Tagline</span>
            </div>
            <div className="flex gap-2">
                <Link href="#">Term</Link>
                <span>.</span> 
                <Link href="#">Policy</Link>
            </div>
        </div>
    </div>
  )
}

export default Footer