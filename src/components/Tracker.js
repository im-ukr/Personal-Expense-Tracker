// FileName: src/components/Tracker.js

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AddTransaction from "./AddTransaction";
import OverviewComponent from "./OverviewComponent";
import TransactionsContainer from "./TransactionsContainer";
import TransactionSummary from "./TransactionSummary"; // Import the new component

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  max-width: 100%;
  background-color: rgba(255, 255, 255, 0.5); /* Translucent background */
  padding: 30px 20px;
  border: 1px solid #000;
  border-radius: 10px; /* Smooth rounded corners */
  margin: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: Add some shadow for better separation from background */
`;

const Heading = styled.h1`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

const TransactionDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 25px;
  background-color: #f0f0f0;
`;

const THeading = styled.div`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: #44e610;
`;

const ExpenseBox = styled.div`
  flex: 1;
  border: 1px solid #000;
  border-radius: 10px;
  padding: 10px 20px;
  background-color: #f0f0f0;
  & span {
    font-weight: bold;
    font-size: 25px;
    display: block;
    color: ${(props) => (props.isExpense ? "red" : "green")};
  }
`;

const IncomeBox = styled(ExpenseBox)``;

const ToggleSummaryButton = styled.button`
  background-color: #4BAAC8
  color: white;
  border-radius: 5px;
  padding: 10px 20px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    background-color: #3187A2; /* Optional: Different hover color */
  }
`;



const Tracker = () => {
  const [toggle, setToggle] = useState(false);
  const [showSummary, setShowSummary] = useState(false); // State for toggling summary
  const [transactions, setTransactions] = useState([]);
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);

  const AddTransactions = (payload) => {
    const transactionArray = [...transactions];
    transactionArray.push(payload);
    setTransactions(transactionArray);
  };

  const removeTransaction = (id) => {
    const updatedTransactions = transactions.filter((transaction) => transaction.id !== id);
    setTransactions(updatedTransactions);
  };

  const calculateTransactions = () => {
    let exp = 0;
    let inc = 0;

    transactions.map((item) => {
      item.transType === "expense" ? (exp = exp + item.amount) : (inc = inc + item.amount);
    });

    setExpense(exp);
    setIncome(inc);
  };

  useEffect(() => {
    calculateTransactions();
  }, [transactions]);

  return (
    <Container>
      <Heading>Expense Tracker</Heading>
      <OverviewComponent toggle={toggle} setToggle={setToggle} expense={expense} income={income} />

      {toggle && <AddTransaction setToggle={setToggle} AddTransactions={AddTransactions} />}

      <TransactionDetails>
        <ExpenseBox isExpense>
          Expense <span>₹{expense}</span>
        </ExpenseBox>

        <IncomeBox>
          Income <span>₹{income}</span>
        </IncomeBox>
      </TransactionDetails>

      <TransactionsContainer transactions={transactions} removeTransaction={removeTransaction} />

      <ToggleSummaryButton onClick={() => setShowSummary(!showSummary)}>
        {showSummary ? "Hide Summary" : "View Transaction Summary"}
      </ToggleSummaryButton>

      {showSummary && <TransactionSummary transactions={transactions} />}
    </Container>
  );
};

export default Tracker;
