import type { EmployeeType } from "../types/EmployeeType";


interface EmployeeComponentProps {
    employee:EmployeeType;
}

const EmployeeComponent = ({employee}:EmployeeComponentProps) => {
  return (
    <div className="h-96 w-1/3 bg-white shadow-2xl rounded-2xl">

    </div>
  )
}
export default EmployeeComponent
