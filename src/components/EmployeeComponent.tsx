import type { EmployeeType } from "../types/EmployeeType";


interface EmployeeComponentProps {
    employee:EmployeeType;
}

const EmployeeComponent = ({employee}:EmployeeComponentProps) => {
  return (
    <div className="h-100 w-1/3 bg-white shadow-2xl rounded-2xl">
      <img src={employee.empImage} alt="" />
      <h1>{employee.empName}</h1>
      <h1>{employee.empJobTitle}</h1>
      <p>{employee.empSalary}</p>
      {employee.hobbies.map((hobby)=>(
        <p key={employee.empId}>{hobby}</p>
      ))}
    </div>
  )
}
export default EmployeeComponent
