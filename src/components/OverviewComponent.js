// FileName: OverviewComponent.js 

import styled from "styled-components"; 

const Container = styled.div` 
display: flex; 
justify-content: space-between; 
align-items: center; 
margin-bottom: 25px; 
`; 

const Balance = styled.h2` 
font-weight: 500; 
& span { 
	font-weight: bold; 
} 
`; 

const AddBtn = styled.button` 
  cursor: pointer; 
  background-color: #4BAAC8; 
  color: white;
  padding: 7px 20px; 
  font-size: 16px; 
  border: none; 
  text-transform: uppercase; 
  border-radius: 5px; 
  &:hover {
    background-color: #3187A2; /* Optional: Different hover color */
  }
`; 

const OverviewComponent = ({ toggle, setToggle, income, expense }) => { 
const bal = income - expense; 

return ( 
	<Container> 
	<Balance> 
		Balance <span>₹{bal}</span> 
	</Balance> 
	<AddBtn onClick={() => setToggle(!toggle)}> 
		{toggle ? "Cancel" : "Add"} 
	</AddBtn> 
	</Container> 
); 
}; 

export default OverviewComponent; 
