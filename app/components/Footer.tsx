import Link from "next/link";
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";  // Using React Icons for fancy icons

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-6">
        {/* Left Section: Text Information */}
        <div className="text-center sm:text-left mb-6 sm:mb-0">
          <p className="text-sm sm:text-base text-gray-400">
            © {new Date().getFullYear()} M.Tech Hostel App. All rights reserved.
          </p>
          <p className="text-sm sm:text-base text-gray-400">
            Developed by{" "}
            <Link
              href="https://sahedx.vercel.app"
              className="text-indigo-400 hover:text-indigo-500 hover:underline transition duration-200"
              target="_blank"
            >
              SAHXD INC.
            </Link>
          </p>
          <p className="text-sm sm:text-base text-gray-400">
            Powered by{" "}
            <Link
              href="https://www.kgec.edu.in/"
              className="text-indigo-400 hover:text-indigo-500 hover:underline transition duration-200"
              target="_blank"
            >
              Kalyani Govt. Engineering College (KGEC)
            </Link>
          </p>
        </div>

        {/* Right Section: Social Media Icons */}
        <div className="flex mt-4 sm:mt-0 space-x-6 justify-center sm:justify-end">
          <Link href="https://github.com/iamsahed07" target="_blank">
            <FaGithub className="text-3xl hover:text-indigo-500 transition duration-200 transform hover:scale-110" />
          </Link>
          <Link href="https://www.linkedin.com/in/iamsahed/" target="_blank">
            <FaLinkedin className="text-3xl hover:text-indigo-500 transition duration-200 transform hover:scale-110" />
          </Link>
          <Link href="https://sahedxtech.vercel.app" target="_blank">
            <FaExternalLinkAlt className="text-3xl hover:text-indigo-500 transition duration-200 transform hover:scale-110" />
          </Link>
        </div>
      </div>

      {/* Divider Line */}
      <div className="mt-6 border-t border-gray-700 w-1/2 mx-auto"></div>
    </footer>
  );
}
