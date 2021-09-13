import mongoose from "mongoose";

const { String, Date } = mongoose.Schema.Types;

const EmployeesSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    hireDate: {
        type: Date,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    ronSwanson: {
        type: String,
        required: true
    },
    dadJoke: {
        type: String,
        required: true
    },
})

export default mongoose.models.Employees || mongoose.model('Employees', EmployeesSchema)
