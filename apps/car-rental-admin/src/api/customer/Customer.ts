import { Rental } from "../rental/Rental";

export type Customer = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  rentals?: Array<Rental>;
  updatedAt: Date;
};
