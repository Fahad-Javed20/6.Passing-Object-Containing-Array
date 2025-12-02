
import './App.css'
import EmployeeComponent from './components/EmployeeComponent';
import type { EmployeeType } from './types/EmployeeType';

function App() {
  
 const EmployeeDstails:EmployeeType = {
  empId: 1,
  empName:"Fahad Bin Javed",
  empJobTitle: "Software Engineer",
  empSalary:50000000000,
  hobbies: ["Coding","Meditation","Badminton"],
};

  return (
    <>
      <EmployeeComponent employee = {EmployeeDstails}/>
    </>
  )
}

export default App
