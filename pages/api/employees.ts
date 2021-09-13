// import employees from '../../utilities/employees.json'
import Employees from '../../models/Employees'
import connectDb from '../../utils/connectDB'

connectDb()

const employees: any = async (req: any, res: any) => {
  switch (req.method) {
    case 'GET':
      await handleGetRequest(req, res)
      break;
    case 'DELETE':
      await handleDeleteRequest(req, res)
      break;
    case 'POST':
      await handlePostRequest(req, res)
      break;
    case 'PUT':
      break;
    default:
      res.status(405).send(`Method ${req.method} not allowed`);
      break;
  }
};

async function handleDeleteRequest(req: any, res: any) {
  const { _id } = req.query;
  await Employees.findOneAndDelete({ _id })
  res.status(204).json({})
}

async function handleGetRequest(req: any, res: any) {
  let employees

  if (Object.keys(req.query).length !== 0) {
    const { _id } = req.query
    employees = await Employees.findOne({ _id })
  } else {
    employees = await Employees.find()
  }

  res.status(200).json(employees);
}

async function handlePostRequest(req: any, res: any) {
  
  const {
    firstName,
    lastName,
    hireDate,
    role,
    ronSwanson,
    dadJoke
  } = req.body

  if (!firstName || !lastName || !hireDate || !role || !ronSwanson || !dadJoke) {
    return res.status(422).send('Employee missing one or more fields.')
  }

  const employee = await new Employees({
    firstName,
    lastName,
    hireDate,
    role,
    ronSwanson,
    dadJoke
  }).save()

  res.status(201).json(employee)
}

export default employees
