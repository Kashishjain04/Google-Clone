import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  XIcon,
  MicrophoneIcon,
  SearchIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

const Header = ({ q }) => {
  const router = useRouter(),
    [query, setQuery] = useState(q);

  const search = (e) => {
    e.preventDefault();
    if (query === "") return;
    router.push(`/search?q=${query}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
          width={120}
          height={40}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
        <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input
            className="flex-grow w-full focus:outline-none"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <XIcon
            className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => {
              setQuery("");
            }}
          />
          <MicrophoneIcon className="cursor-pointer h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 border-gray-300 pl-4" />
          <SearchIcon className="cursor-pointer h-6 hidden sm:inline-flex text-blue-500 " />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <div className="space-x-2 items-center ml-auto hidden md:flex">
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
          <Avatar url="https://lh3.googleusercontent.com/a-/AOh14GhfgSuVig-RNSusuO5_kYuCKLZEBIbxvssam3e8ng=s96-c" />
        </div>
      </div>
      {/* HeaderOptions */}
      <HeaderOptions />
    </header>
  );
};

export default Header;
