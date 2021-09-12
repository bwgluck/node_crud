// import employees from '../../utilities/employees.json'
import Employees from '../../models/Employees'
import connectDb from '../../utils/connectDB'

connectDb()

const employees: any = async (req: any, res: any) => {
  // res.status(200).json(employees)
  const employees = await Employees.find()
  res.status(200).json(employees)
}

export default employees
