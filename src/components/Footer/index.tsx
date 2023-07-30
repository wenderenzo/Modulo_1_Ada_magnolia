import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { BiLogoGmail } from 'react-icons/bi';
export default function Footer() {
    return (
        <footer className="bg-[#46362B] text-[#EEB960]">
            <div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row divide-gray-400">
                <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
                    <li>Shop</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                </ul>
                <div className="flex flex-col justify-center pt-6 lg:pt-0">
                    <div className="flex justify-center space-x-4">
                        <a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-[#EEB960] text-gray-900">
                            <BsInstagram/>
                        </a>
                        <a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-[#EEB960] text-gray-900">
                            <BsTwitter/>
                        </a>
                        <a rel="noopener noreferrer" href="#" title="Gmail" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-[#EEB960] text-gray-900">
                            <BiLogoGmail/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}