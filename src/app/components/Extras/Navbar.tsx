import { ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
    return (
        <nav>
            <div className="w-full fixed h-14 z-50 flex justify-between backdrop-blur-sm border-b border-black/5 items-center px-10">
                <Link href={'/'}>
                    <Image className="opacity-60" src={'/logo.png'} alt="logo" height={25} width={25} />
                </Link>
                <div className="">
                    <ul className="flex gap-8 text-xs text-black/60 tracking-wider">
                        <li>
                            <Link href={'/'}>
                                HOME
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'}>
                                ABOUT
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'}>
                                SERVICES
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'}>
                                CONTACT
                            </Link>
                        </li>
                    </ul>
                </div>
                <Link href={'/'} className="">
                    <ShoppingCart className="text-black/60" width={20} />
                </Link>
            </div>
        </nav>
    )
}