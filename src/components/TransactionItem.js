// src/components/TransactionItem.js

import React from "react";
import styled from "styled-components";

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e6e8e9;
  background-color: #fff;
  border-radius: 5px;
  padding: 10px 20px;
  border-right: 5px solid ${(props) => (props.isExpense ? "red" : "green")};
  margin-bottom: 10px;
  cursor: pointer;
`;

const DeleteButton = styled.button`
  background-color: white;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
`;


const TransactionItem = ({ transaction, removeTransaction }) => {
  // Assuming transaction.date is a valid Date object or string
  const dateObj = new Date(transaction.date);
  const month = dateObj.toLocaleString('en-US', { month: 'long' });
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();

  const formattedDate = `${month} ${day < 10 ? '0' + day : day}, ${year}`;

  return (
    <Item isExpense={transaction?.transType === "expense"}>
      <span>{transaction.details}</span>
      <span>₹{transaction.amount}</span>
      <span>{transaction.category}</span>
      <span>{formattedDate}</span> {/* Display formatted date */}
      <DeleteButton onClick={() => removeTransaction(transaction.id)}>
      ⛔
      </DeleteButton>
    </Item>
  );
};


export default TransactionItem;
