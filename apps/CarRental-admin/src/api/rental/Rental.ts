import { Car } from "../car/Car";
import { Customer } from "../customer/Customer";

export type Rental = {
  car?: Car | null;
  createdAt: Date;
  customer?: Customer | null;
  endDate: Date | null;
  id: string;
  startDate: Date | null;
  updatedAt: Date;
};
