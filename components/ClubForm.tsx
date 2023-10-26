import React, { useState } from "react";
import { Web3Button } from "@thirdweb-dev/react";
import { CONTRACT_ADDRESS } from "../constants/addresses";

interface ClubFormProps {
  // onCreateClub: (clubName: string, password: string) => void;
}

const ClubForm: React.FC<ClubFormProps> = () => {
  const [name, setName] = useState("");
  const [wallet, setWallet] = useState("");
  const [electionId, setElectionId] = useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleElectionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setElectionId(event.target.value);
  };

  const handleWalletChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWallet(event.target.value);
  };

  return (
    <div className="text-black border flex flex-col items-center justify-center p-10 bg-yellow-200">
      <p className=" text-red-500">Only Admin Can see this</p>
      <p className="pb-10 font-bold">Add Condidate to Election</p>
      <form className="flex flex-col items-center justify-center">
        <div className="mb-4 ">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="clubName"
          >
            Candidate Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="candidateName"
            type="text"
            placeholder="Enter candidate name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="mb-4 ">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="wallet"
          >
            Candidate Wallet:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="clubName"
            type="text"
            placeholder="Enter candidate wallet"
            value={wallet}
            onChange={handleWalletChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            ElectionId
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="electionId"
            type="text"
            placeholder="Enter electionId"
            value={electionId}
            onChange={handleElectionChange}
          />
        </div>
        <Web3Button
          contractAddress={CONTRACT_ADDRESS}
          action={(contract) => {
            contract.call("addCandidate", [name, wallet, electionId]);
          }}
        >
          addCandidate
        </Web3Button>
      </form>
    </div>
  );
};

export default ClubForm;
