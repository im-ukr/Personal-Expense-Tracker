// src/components/TransactionSummary.js

import React from 'react';
import styled from 'styled-components';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const SummaryContainer = styled.div`
  border: 1px solid #000;
  padding: 20px;
  border-radius: 5px;
  margin-top: 20px;
  background-color: #f5f5f5;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const SummaryTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
`;

const CategorySummary = styled.div`
  margin-top: 20px;
`;

const TransactionSummary = ({ transactions }) => {
  const totalTransactions = transactions.length;
  const totalExpense = transactions
    .filter(transaction => transaction.transType === 'expense')
    .reduce((acc, curr) => acc + curr.amount, 0);
  const totalIncome = transactions
    .filter(transaction => transaction.transType === 'income')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const categorySpends = transactions.reduce((acc, curr) => {
    if (curr.transType === 'expense') {
      acc[curr.category] = (acc[curr.category] || 0) + curr.amount;
    }
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(categorySpends),
    datasets: [
      {
        label: 'Spends by Category',
        data: Object.values(categorySpends),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#FF6347',
          '#ADFF2F',
          '#9370DB',
          '#3CB371',
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#FF6347',
          '#ADFF2F',
          '#9370DB',
          '#3CB371',
        ],
      },
    ],
  };

  return (
    <SummaryContainer>
      <SummaryTitle>Transaction Summary</SummaryTitle>
      <SummaryItem>
        <span>Total Transactions:</span>
        <span>{totalTransactions}</span>
      </SummaryItem>
      <SummaryItem>
        <span>Total Expense:</span>
        <span>₹{totalExpense}</span>
      </SummaryItem>
      <SummaryItem>
        <span>Total Income:</span>
        <span>₹{totalIncome}</span>
      </SummaryItem>
      <CategorySummary>
        <h3>Spends by Category:</h3>
        {Object.keys(categorySpends).map(category => (
          <SummaryItem key={category}>
            <span>{category}:</span>
            <span>₹{categorySpends[category]}</span>
          </SummaryItem>
        ))}
      </CategorySummary>
      <Pie data={chartData} />
    </SummaryContainer>
  );
};

export default TransactionSummary;
