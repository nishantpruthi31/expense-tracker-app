import logo from './logo.svg';
import './App.css';
import {Typography, styled,Box} from '@mui/material';
import Balance from './components/Balance';
import ExpenseCard from './components/ExpenseCard';
import NewTransactions from './components/NewTransactions';
import Transactions from './components/Transactions';
import { useState } from 'react';

const Header=styled(Typography) `
font-size:36px;
text-transform:uppercase;
color:blue;
`
const Component =styled(Box)`
display:flex;
background:#fff;
width:800px;
padding:10px;
border-radius:20px;
margin:auto;
& > div {
height:70vh;
width:50%;
padding:10px

}


`
function App() {
  const [transactions,setTransactions]=useState([
    { id:1,text:"Momos",amount:-20 },
    { id:2,text:"Salary",amount:3000 },
    { id:3,text:"Book",amount:-100 },
    { id:4,text:"Bonus",amount:1500 },
  ])
  return (
    <div className="App">
      <Header>Expense Tracker</Header>
      <Component>
    
        <Box>
        <Balance transactions={transactions}/>
        <ExpenseCard transactions={transactions}/>
        <NewTransactions setTransactions={setTransactions}/>
        </Box>

        <Box>
          <Transactions transactions={transactions} setTransactions={setTransactions}/>
        </Box>
      </Component>
    </div>
  );
}

export default App;
