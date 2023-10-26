import React from "react";
import { IoLogoEdge, IoMenu } from "react-icons/io5";
import { ConnectWallet, Web3Button, useAddress } from "@thirdweb-dev/react";
import { CONTRACT_ADDRESS } from "../constants/addresses";
import Link from "next/link";

interface HeaderProps {
  handleSidebarToggle?: () => void;
}

const Header: React.FC<HeaderProps> = ({ handleSidebarToggle = undefined }) => {
  const address = useAddress();

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
        {address && (
          <Link href="/createElection">
            <Web3Button
              contractAddress={CONTRACT_ADDRESS}
              action={(contract) => {
                // contract.call("addCandidate", [name, wallet, electionId]);
              }}
            >
              Create Election
            </Web3Button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
