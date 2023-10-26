import { NextPage } from "next";
import { Web3Button } from "@thirdweb-dev/react";
import React, { useState } from "react";
import { CONTRACT_ADDRESS } from "../constants/addresses";

const CreateElection: NextPage = () => {
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState<number | undefined>(undefined);
  const [endDate, setEndDate] = useState<number | undefined>(undefined);
  const [numWinner, setNumWinner] = useState<number | undefined>(undefined);
  const [minPercentage, setMinPercentage] = useState<number | undefined>(
    undefined
  );

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleStartDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setStartDate(Number(event.target.value));
  };

  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(Number(event.target.value));
  };

  const handleNumWinnerChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNumWinner(Number(event.target.value));
  };

  const handleMinPercentageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMinPercentage(Number(event.target.value));
  };

  return (
    <div className="text-black border flex flex-col items-center justify-center p-10 bg-yellow-200">
      <p className="pb-10 font-bold">Add your Election</p>
      <form className="flex flex-col items-center justify-center">
        <div className="mb-4 ">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="clubName"
          >
            Election Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="candidateName"
            type="text"
            placeholder="Enter election name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="mb-4 ">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="startDate"
          >
            Election start date:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="clubName"
            type="number"
            placeholder="Enter candidate wallet"
            value={startDate}
            onChange={handleStartDateChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="endDate"
          >
            Election end date:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="electionId"
            type="number"
            placeholder="Enter deadline"
            value={endDate}
            onChange={handleEndDateChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="numWinner"
          >
            Election Number of winners:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="electionId"
            type="number"
            placeholder="Enter number of winners"
            value={numWinner}
            onChange={handleNumWinnerChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="minPercentage"
          >
            Election min percentage to win:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="minPercentage"
            type="number"
            placeholder="Enter minimum percentage to win"
            value={minPercentage}
            onChange={handleMinPercentageChange}
          />
        </div>
        <Web3Button
          contractAddress={CONTRACT_ADDRESS}
          action={(contract) => {
            contract.call("createElection", [
              name,
              startDate,
              endDate,
              numWinner,
              minPercentage,
            ]);
          }}
        >
          add Election
        </Web3Button>
      </form>
    </div>
  );
};

export default CreateElection;
