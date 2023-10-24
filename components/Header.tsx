import React, { useEffect } from "react";
import { IoLogoEdge, IoMenu } from "react-icons/io5";
import { ConnectWallet } from "@thirdweb-dev/react";

interface HeaderProps {
  handleSidebarToggle?: () => void;
}

const Header: React.FC<HeaderProps> = ({ handleSidebarToggle = undefined }) => {
  return (
    <nav className=" bg-green-950 border-gray-200 border-b-2 w-screen">
      <div className=" flex flex-wrap items-center justify-between  p-4">
        {handleSidebarToggle && (
          <button
            className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            onClick={handleSidebarToggle}
          >
            <span className="sr-only text-black">Open sidebar</span>
            <div className="flex items-center text-black ">
              <IoMenu className="text-xl mr-2" />
              Menu
            </div>
          </button>
        )}
        <div className="flex items-center self-center text-center justify-center">
          <IoLogoEdge className="self-center text-3xl text-blue-500 mr-2" />
          <span className="self-center text-3xl font-semibold whitespace-nowrap">
            Election
          </span>
        </div>
        <ConnectWallet />
      </div>
    </nav>
  );
};

export default Header;
