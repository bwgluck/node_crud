// import employees from '../../utilities/employees.json'
import Employees from '../../models/Employees'
import connectDb from '../../utils/connectDB'

connectDb()

const employees: any = async (req: any, res: any) => {
  let employees
  console.log('query', req.query)
  if (Object.keys(req.query).length !== 0) {
    const { _id } = req.query
    employees = await Employees.findOne({ _id })
  } else {
    employees = await Employees.find()
  }
  res.status(200).json(employees)
}

export default employees
