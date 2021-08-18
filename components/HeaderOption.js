import React from "react";

const HeaderOption = ({ Icon, title, selected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center space-x-1 border-b-4 border-transparent pb-3 cursor-pointer ${
        selected && "text-blue-500 border-blue-500"
      }`}
    >
      <Icon className="h-4" />
      <p className="hidden sm:inline-flex">{title}</p>
    </div>
  );
};

export default HeaderOption;
