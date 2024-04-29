import { CarWhereUniqueInput } from "../car/CarWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type RentalCreateInput = {
  car?: CarWhereUniqueInput | null;
  customer?: CustomerWhereUniqueInput | null;
  endDate?: Date | null;
  startDate?: Date | null;
};
