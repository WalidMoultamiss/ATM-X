import { Role, LicenseType } from '@ts/enums';
import { Schema, model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export interface IUser {
  id: string;
  name: string;
  visa: string;
  code: string;
  balance: number;
  createdAt: string;
  token: string;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    visa: { type: String, required: true , unique: true},
    code: { type: String, required: true, unique: true },
    balance: { type: Number, required: true, default: 0 },
  },
  { timestamps: true }
);

// 3. Create a Model.
export const User = model<IUser>('User', schema);
