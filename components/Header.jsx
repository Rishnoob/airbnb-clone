import Image from "next/image";
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  Bars3Icon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Left - Logo */}
      <div className="relative flex items-center h-10 cursor-pointer  my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Middle - Search */}
      <div className="flex items-center border-2 rounded-full py-2 md:shadow-sm ">
        <input
          type="text"
          placeholder="Search...."
          className="pl-5 flex-grow text-sm text-gray-600 placeholder-gray-400 outline-none bg-transparent"
        />
        <MagnifyingGlassIcon className="hidden mx-2 md:inline-flex e h-8 bg-red-400 text-white rounded-full p-1 cursor-pointer" />
      </div>

      {/* Right */}
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 rounded-full p-2 border-gray-300">
          <Bars3Icon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
