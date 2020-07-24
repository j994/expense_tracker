import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ trx }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = trx.amount > 0 ? "+" : "-";

  return (
    <li className={trx.amount > 0 ? "plus" : "minus"}>
      {trx.text}{" "}
      <span>
        {sign}${Math.abs(trx.amount)}
      </span>
      <button className="delete-btn" onClick={() => deleteTransaction(trx._id)}>
        x
      </button>
    </li>
  );
};

export default Transaction;
