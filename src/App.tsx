
import './App.css'
import EmployeeComponent from './components/EmployeeComponent';
import type { EmployeeType } from './types/EmployeeType';

function App() {
  
 const EmployeeDstails:EmployeeType = {
  empId: 1,
  empImage:"https://images.unsplash.com/photo-1686230399946-8cfdb71f4f07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3ltJTIwYm95fGVufDB8fDB8fHww",
  empName:"Fahad Bin Javed",
  empJobTitle: "Software Engineer",
  empSalary:50000000000,
  hobbies: ["Coding","Meditation","Badminton","exercising","Gardining"],
};

  return (
    <>
      <EmployeeComponent employee = {EmployeeDstails}/>
    </>
  )
}

export default App
