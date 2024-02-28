import { Address } from './Address';

export interface People {
  _id: string;
  name: string;
  dob: string;
  address: Address;
  telephone: string;
  pets: string[];
  score: number;
  email: string;
  url: string;
  description: string;
  verified: boolean;
  salary: number;
}
