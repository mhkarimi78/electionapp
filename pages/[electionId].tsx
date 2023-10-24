import React from "react";
import { useRouter } from "next/router";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../constants/addresses";
import { useContract, useContractRead } from "@thirdweb-dev/react";

function ElectionDetail() {
  const router = useRouter();
  const id = router.query.electionId;
  const { contract } = useContract(CONTRACT_ADDRESS, CONTRACT_ABI);
  const { data: election, isLoading: isElectionLoading } = useContractRead(
    contract,
    "getElectionById"
  );
  return (
    <div>
      hi
      {Number(id)}
    </div>
  );
}

export default ElectionDetail;
