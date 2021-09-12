import { ObjectId } from "mongoose";

interface IGetEmployeesRes {
    _id: ObjectId;
    firstName: string;
    lastName: string;
    hireDate: Date;
    role: string;
    ronSwanson: string;
    dadJoke: string;
}

export type {
    IGetEmployeesRes
}
