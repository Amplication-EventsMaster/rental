import { Rental } from "../rental/Rental";

export type Car = {
  color: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  licenseNumber: string | null;
  model: string | null;
  rentals?: Array<Rental>;
  updatedAt: Date;
};
