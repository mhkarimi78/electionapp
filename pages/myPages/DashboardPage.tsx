import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function DashboardPage() {
  const navigate = useNavigate();

  const [allClub, setAllClub] = useState(0);
  const [balance, setBalance] = useState<number>(0);
  const [myClub, setMyClub] = useState(2);

  return (
    <div>
      <div className="flex flex-col items-center mt-10">
        <div className="bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text ml-10 self-start">
          <h1 className="text-4xl font-bold">Dashboard</h1>
        </div>
        <div className="flex justify-center w-full mt-10 text-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-48 m-4 hover:scale-110">
            <h2 className="text-lg font-bold mb-4">Balance (CELO)</h2>
            <p className="text-3xl font-bold text-purple-500">{balance}</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 w-48 m-4 hover:scale-110">
            <h2 className="text-lg font-bold mb-4">My Clubs</h2>
            <p className="text-3xl font-bold text-purple-500 ">{myClub}</p>
          </div>
          <div
            className="bg-white rounded-lg shadow-lg p-6 w-48 m-4 hover:scale-110"
            onClick={() => {
              navigate("/allclubs");
            }}
          >
            <h2 className="text-lg font-bold mb-4">All Clubs</h2>
            <p className="text-3xl font-bold text-purple-500 ">{allClub}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
