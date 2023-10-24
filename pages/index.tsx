import {
  ConnectWallet,
  useAddress,
  useContract,
  useContractRead,
} from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../constants/addresses";
import { useEffect } from "react";
import { ClubTable } from "../components/ClubTable";
import Routes from "./myPages/Routes";
import Header from "../components/Header";

const gradientTextStyle = {
  background:
    "linear-gradient(93.57deg, #2658bd 2.93%, rgba(76, 82, 248, 0.689) 37.09%, rgba(141, 179, 255, 0.433555) 65.23%, rgba(0, 21, 14, 0.143) 97.14%, rgba(229, 231, 235, 0) 112.92%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  color: "transparent",
  fontSize: "48px",
  fontWeight: "bold",
  fontweight: "700",
  fontFamily: "Space Grotesk",
  lineHeight: 1.2,
};

const Home: NextPage = () => {
  const address = useAddress();
  const { contract } = useContract(CONTRACT_ADDRESS, CONTRACT_ABI);
  const { data: election, isLoading: isElectionLoading } = useContractRead(
    contract,
    "getAllElection"
  );
  // const data = await contract.call("addCandidate", [name, electionId])
  const { data: electionCount, isLoading: isElectionCountLoading } =
    useContractRead(contract, "electionCount");
  useEffect(() => {
    console.log("djdjjd", election, electionCount);
  }, [electionCount, election]);

  return (
    <div>
      {/* <Routes /> */}
      {/* <main className={styles.main}>
        <div className={styles.container}>
          <div>
            <ConnectWallet />
          </div>
          <h1>Election Dapp</h1>
        </div>
      </main> */}
      <div className=" bg-slate-300 h-screen">
        <Header />
        <div className="flex font-bold justify-center items-center flex-col w-screen">
          <div className="flex-grow flex flex-col justify-center items-center mt-32">
            <div className="flex flex-col justify-center items-center mt-10">
              <p style={gradientTextStyle} className="font-grotesk text-center">
                Welcome to Election Dapp
              </p>
              <p className="mt-6 mb-10 text-2xl font-inter text-[#261643] font-inter">
                Your First Election Web3 Dapp
              </p>
              {/* <p style={gradientTextStyle} className="font-grotesk text-center font-lg">
              SpheronClub is a light web wallet and Investment Club platform to
              manage funds (treasury) in Celo Blockchain.
            </p> */}
            </div>
            {/* <div className="h-64 w-10" /> */}
          </div>
          <div className="flex flex-col items-center justify-center text-black w-96">
            {isElectionLoading ? (
              <p>loading Election</p>
            ) : election.length == 0 ? (
              <p>No Election yet</p>
            ) : (
              <ClubTable data={election} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
