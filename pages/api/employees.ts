import employees from '../../utilities/employees.json'
import connectDb from '../../utilities/connectDB'

connectDb()

const Employees: any = (req: any, res: any) => {
  res.status(200).json(employees)
}

export default Employees
