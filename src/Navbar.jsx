import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import { forwardRef } from 'react';


const Navbar = forwardRef((_, ref) => {
  return (
  <nav ref={ref} className="flex items-center justify-between p-4 text-white fixed top-10 -translate-x-1/2 left-1/2 z-20 rounded-2xl w-[60%] bg-[#00000020] backdrop-blur-sm border-gray-600 border">
        <div>
        <h1 className="text-2xl font-bold">NashDax</h1>
        </div>
      <ul className="flex space-x-4 style-none">
        <li><a href="/" className="hover:text-gray-300 font-bold">Home</a></li>
        <li><a href="/about" className="hover:text-gray-300 font-bold">About</a></li>
        <li><a href="/contact" className="hover:text-gray-300 font-bold">Contact</a></li>
      </ul>
      <div className="flex gap-3">
        <a href="https://www.linkedin.com/in/ardiva-hans-putra-tarlim/" target="_blank" rel="noopener noreferrer">
          <BsLinkedin className="text-2xl"></BsLinkedin>
        </a>
        <a href="https://www.instagram.com/hans.pt03/" target="_blank" rel="noopener noreferrer">
          <BsInstagram className="text-2xl"></BsInstagram>
        </a>
        <a href="https://github.com/nashdax" target="_blank" rel="noopener noreferrer">
          <BsGithub className="text-2xl"></BsGithub>
        </a>
      </div>
    </nav>
  )
}
);

export default Navbar;