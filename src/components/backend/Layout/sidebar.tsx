import Link from "next/link";
import { useState } from "react";
import { Auth } from "aws-amplify";
import { HiOutlineCog, HiOutlineUsers, HiHome } from "react-icons/hi";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";
import { ImBlogger } from "react-icons/im";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const signOut = async () => {
    try {
      await Auth.signOut();
    } catch (err) {
      console.log("Error signing out user", err);
    }
  };

  return (
    <div className={`${isOpen ? "w-64" : "w-16"} transition-all shadow-md`}>
      <div
        className={`flex flex-col fixed h-screen ${
          isOpen ? "w-64" : "w-16"
        } bg-white border-r border-gray-200`}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h1 className="text-lg font-semibold text-black">
            {isOpen ? "Admin Dashboard" : "AD"}
          </h1>
          <button
            className="text-gray-500 hover:text-gray-600 focus:outline-none z-10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <IoIosArrowDropleftCircle size={35} />
            ) : (
              <IoIosArrowDroprightCircle size={35} />
            )}
          </button>
        </div>

        {/* Sidebar links */}
        <nav className={`flex flex-col text-black`}>
          <Link
            href="/dashboard"
            className={`flex flex-row items-center hover:bg-gray-200 py-4 px-2 rounded-lg transition duration-300 ease-in-out ${
              isOpen ? "" : "justify-center items-center"
            }`}
            title="Dashboard"
          >
            <HiHome
              className={`inline-block ${isOpen ? "mr-2" : "mr-0"}`}
              size={30}
            />
            <span className={`${isOpen ? "block" : "hidden"}`}>Dashboard</span>
          </Link>
          <Link
            href="/dashboard/blogs"
            className={`flex flex-row items-center hover:bg-gray-200 py-4 px-2 rounded-lg transition duration-300 ease-in-out ${
              isOpen ? "" : "justify-center items-center"
            }`}
            title="Blogs"
          >
            <ImBlogger
              className={`inline-block ${isOpen ? "mr-2" : "mr-0"}`}
              size={30}
            />
            <span className={`${isOpen ? "block" : "hidden"}`}>Blogs</span>
          </Link>
          <Link
            href="/users"
            className={`flex flex-row items-center hover:bg-gray-200 py-4 px-2 rounded-lg transition duration-300 ease-in-out ${
              isOpen ? "" : "justify-center items-center"
            }`}
            title="Users"
          >
            <HiOutlineUsers
              className={`inline-block ${isOpen ? "mr-2" : "mr-0"}`}
              size={30}
            />
            <span className={`${isOpen ? "block" : "hidden"}`}>Users</span>
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`flex flex-row items-center hover:bg-gray-200 py-4 px-2 rounded-lg transition duration-300 ease-in-out ${
              isOpen ? "" : "justify-center items-center"
            }`}
            title="Settings"
          >
            <HiOutlineCog
              className={`inline-block ${isOpen ? "mr-2" : "mr-0"}`}
              size={30}
            />
            <span className={`${isOpen ? "block" : "hidden"}`}>
              Settings
              <IoIosArrowDown className={`inline-block ml-20`} />
            </span>
          </button>
          {menuOpen && (
            <div
              onClick={signOut}
              title="Sign Out"
              className={`flex flex-row ${
                isOpen ? "justify-start px-4" : "justify-center"
              } items-center hover:bg-gray-200 py-4 rounded-lg transition duration-300 ease-in-out cursor-pointer`}
            >
              <div className={`flex flex-row items-center`}>
                <BiLogOut
                  className={`inline-block ${isOpen ? "mr-2" : "mr-0"}`}
                  size={20}
                />
                <span className={`${isOpen ? "block" : "hidden"} text-sm`}>
                  Sign out
                </span>
              </div>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}
