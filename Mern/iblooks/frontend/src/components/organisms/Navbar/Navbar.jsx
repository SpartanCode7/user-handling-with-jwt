import Logo from "@/components/atoms/Logo/Logo"
import Link from "next/link"
import CartMenu from "@/components/molecules/Cart"

export default function Navbar() {
    return (
        <div className="navbar bg-primary">
            <div className="container flex justify-between px-5 py-4 mx-auto">
                <Logo />
                <div className="flex items-center gap-5">
                    <div className="">
                         <Link href="#">Login</Link>
                    </div>
                    <div className="">
                        <CartMenu />
                    </div>
                </div>
            </div>
        </div>       
    )
}