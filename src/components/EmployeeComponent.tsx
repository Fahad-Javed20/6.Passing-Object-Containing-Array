import type { EmployeeType } from "../types/EmployeeType";


interface EmployeeComponentProps {
    employee:EmployeeType;
}

const EmployeeComponent = ({employee}:EmployeeComponentProps) => {
  return (
    <div className="h-96 w-1/3 bg-white sha">

    </div>
  )
}
export default EmployeeComponent
