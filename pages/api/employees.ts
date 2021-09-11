import employees from '../../static/employees.json'

const Employees: any = (req: any, res: any) => {
  res.status(200).json(employees)
}

export default Employees
