import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoLogoEdge } from "react-icons/io5";
import { BsHouseFill, BsFillArrowUpCircleFill } from "react-icons/bs";
import { IoCreateSharp, IoWallet } from "react-icons/io5";
import classNames from "classnames";
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const navigationData = ["Dashboard", "My Club", "All Clubs", "Create Club"];
  const [currentRoute, setCurrentRoute] = useState<string>("Dashboard");
  const [clicked, setClicked] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleNavigationClick = (route: string) => {
    setCurrentRoute(route);
    setClicked(!clicked);
    onClose();
  };

  useEffect(() => {
    currentRoute == "Create Club"
      ? navigate("/createclub")
      : currentRoute == "All Clubs"
      ? navigate("/allclubs")
      : currentRoute == "Dashboard"
      ? navigate("/dashboard")
      : currentRoute == "My Club" && navigate("/myclub");
  }, [clicked]);

  return (
    <div className={classNames("fixed inset-0 z-50", { hidden: !isOpen })}>
      <div
        className="absolute inset-0 bg-gray-900 opacity-50"
        onClick={onClose}
      ></div>
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <IoLogoEdge className="text-2xl text-blue-500" />
            <span className="text-lg font-medium text-gray-800">
              Election
            </span>
          </div>
          <button
            className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            onClick={onClose}
          >
            <span className="sr-only">Close sidebar</span>
            {/* <IoBookmark className="text-xl" /> */}
          </button>
        </div>
        <div className="px-4 py-2">
          <ul className="space-y-2">
            {navigationData.map((route) => (
              <li key={route}>
                <button
                  className={classNames(
                    "flex items-center w-full px-2 py-2 text-sm font-medium rounded-md",
                    { "bg-gray-100 text-gray-900": currentRoute === route },
                    { "text-gray-600 hover:bg-gray-50": currentRoute !== route }
                  )}
                  onClick={() => handleNavigationClick(route)}
                >
                  {route === "Dashboard" && (
                    <BsHouseFill className="mr-3 text-gray-400" />
                  )}
                  {route === "My Club" && (
                    <IoWallet className="mr-3 text-gray-400" />
                  )}
                  {route === "All Clubs" && (
                    <BsFillArrowUpCircleFill className="mr-3 text-gray-400" />
                  )}
                  {route === "Create Club" && (
                    <IoCreateSharp className="mr-3 text-gray-400" />
                  )}
                  <span>{route}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
