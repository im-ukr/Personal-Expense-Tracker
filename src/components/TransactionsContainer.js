// src/components/TransactionsContainer.js

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TransactionItem from "./TransactionItem";

const Container = styled.div``;

const Heading = styled.h2`
  font-size: 25px;
  font-weight: 600;
`;

// const SearchInput = styled.input`
//   width: 100%;
//   padding: 15px 20px;
//   outline: none;
//   border-radius: 5px;
//   margin: 5px 0;
//   border: 1px solid #e6e8e9;
//   background-color: #e6e8e9;
//   margin-bottom: 25px;
// `;

const FilterContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const FilterInput = styled.input`
  padding: 10px;
  border: 1px solid #e6e8e9;
  border-radius: 5px;
`;

const CategorySelect = styled.select`
  padding: 10px;
  border: 1px solid #e6e8e9;
  border-radius: 5px;
`;

const TransactionItems = styled.div``;

const TransactionsContainer = ({ transactions, removeTransaction }) => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredTransactions, setFilteredTransactions] = useState(transactions);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [category, setCategory] = useState("");

  const filteredData = () => {
    let filtered = [...transactions];

    // if (searchInput.trim()) {
    //   filtered = filtered.filter(item =>
    //     item.details.toLowerCase().includes(searchInput.toLowerCase().trim())
    //   );
    // }

    if (startDate) {
      filtered = filtered.filter(item => new Date(item.date) >= new Date(startDate));
    }

    if (endDate) {
      filtered = filtered.filter(item => new Date(item.date) <= new Date(endDate));
    }

    if (category) {
      filtered = filtered.filter(item => item.category === category);
    }

    setFilteredTransactions(filtered);
  };

  useEffect(() => {
    filteredData();
  }, [transactions, startDate, endDate, category]);

  return (
    <Container>
      <Heading>Transactions</Heading>
      <p style={{ fontSize: '14px' }}>‎ Start Date‎ ‎ ‎ ‎‎ ‎ ‎  ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ End Date</p>

      {/* 
      <SearchInput
        type="text"
        placeholder="Search here"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      */}

      <FilterContainer>
        <FilterInput
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          placeholder="Start Date"
        />
        <FilterInput
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          placeholder="End Date"
        />
        <CategorySelect
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Shopping">Shopping</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Education">Education</option>
          <option value="Other">Other</option>
        </CategorySelect>
      </FilterContainer>

      <TransactionItems>
        {filteredTransactions.length ? (
          filteredTransactions.map(transaction => (
            <TransactionItem
              transaction={transaction}
              key={transaction.id}
              removeTransaction={removeTransaction}
            />
          ))
        ) : (
          <p>No Transactions</p>
        )}
      </TransactionItems>
    </Container>
  );
};

export default TransactionsContainer;
