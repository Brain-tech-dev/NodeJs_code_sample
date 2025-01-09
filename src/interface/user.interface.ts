import { Document, } from "mongoose";

export interface UserInterface extends Document {
    name?: string;
    email?: string;
    password?: string;
    is_deleted?: string;
    status?: string;
    createdAt?: Date;
    updated?: Date;
}

