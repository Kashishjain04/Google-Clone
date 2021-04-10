import React, { useState } from "react";
import HeaderOption from "./HeaderOption";
import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from "@heroicons/react/outline";

const HeaderOptions = () => {
  const [selected, setSelected] = useState("All");
  return (
    <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-48 border-b-[1px]">
      {/* Left */}
      <div className="flex space-x-6">
        <HeaderOption
          Icon={SearchIcon}
          title="All"
          selected={selected === "All"}
          onClick={() => setSelected("All")}
        />
        <HeaderOption
          Icon={PhotographIcon}
          title="Images"
          selected={selected === "Images"}
          onClick={() => setSelected("Images")}
        />
        <HeaderOption
          Icon={PlayIcon}
          title="Videos"
          selected={selected === "Videos"}
          onClick={() => setSelected("Videos")}
        />
        <HeaderOption
          Icon={NewspaperIcon}
          title="News"
          selected={selected === "News"}
          onClick={() => setSelected("News")}
        />
        <HeaderOption
          Icon={MapIcon}
          title="Maps"
          selected={selected === "Maps"}
          onClick={() => setSelected("Maps")}
        />
        <HeaderOption
          Icon={DotsVerticalIcon}
          title="More"
          selected={selected === "More"}
          onClick={() => setSelected("More")}
        />
      </div>

      {/* Right */}
      <div className="flex space-x-4">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
};

export default HeaderOptions;
