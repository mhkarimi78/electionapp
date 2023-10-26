import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../constants/addresses";
import {
  Web3Button,
  useAddress,
  useContract,
  useContractRead,
} from "@thirdweb-dev/react";
import ClubForm from "../components/ClubForm";
import EditFrom from "../components/EditFrom";

function ElectionDetail() {
  const router = useRouter();
  const address = useAddress();
  const [endDate, setEndDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [name, setName] = useState("");
  const id = router.query.electionId;
  const { contract } = useContract(CONTRACT_ADDRESS, CONTRACT_ABI);
  const { data: election, isLoading: isElectionLoading } = useContractRead(
    contract,
    "elections",
    [id]
  );
  const { data: isParticipant, isLoading: loadingIsParticipant } =
    useContractRead(contract, "isParticipant", [Number(id) - 1]);

  useEffect(() => {
    console.log("ss", election);
    const start = new Date(election?.startDate._hex * 1000);
    const end = new Date(election?.endDate._hex * 1000);
    setStartDate(start.toDateString());
    setEndDate(end.toDateString());
  }, [election]);

  return (
    <div className="bg-slate-300 h-screen flex justify-around p-20">
      <div className="text-black flex flex-col items-center">
        <p>ElectionId {Number(id)}</p>
        {isElectionLoading ? (
          "loading Election Details"
        ) : (
          <div className="flex flex-col items-center">
            <p>Election Id: {election?.id._hex}</p>
            <p>Election Name: {election?.name}</p>
            <p>Election Start Date: {startDate}</p>
            <p>Election End Date: {endDate}</p>
            <p>Election MinPercentage to Win: {election?.minPercentage._hex}</p>
            <p>Election Number of Winners: {election?.numWinners._hex}</p>
          </div>
        )}
      </div>
      <ClubForm />
      <EditFrom electionId={election?.id._hex} />
      <Web3Button
        contractAddress={CONTRACT_ADDRESS}
        action={(contract) => {
          contract.call("getWinners", [id]);
        }}
      >
        Calculate Winner
      </Web3Button>
      {isParticipant ? (
        <Web3Button
          contractAddress={CONTRACT_ADDRESS}
          action={(contract) => {
            contract.call("vote", [id, address]);
          }}
        >
          Vote
        </Web3Button>
      ) : (
        <div className="flex flex-col">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Enter your name:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter you name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <Web3Button
            contractAddress={CONTRACT_ADDRESS}
            action={(contract) => {
              contract.call("joinAsParticipant", [name, address, id]);
            }}
          >
            join Election
          </Web3Button>
        </div>
      )}
    </div>
  );
}

export default ElectionDetail;
