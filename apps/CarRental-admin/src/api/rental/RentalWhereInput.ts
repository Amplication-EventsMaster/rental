import { CarWhereUniqueInput } from "../car/CarWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type RentalWhereInput = {
  car?: CarWhereUniqueInput;
  customer?: CustomerWhereUniqueInput;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  startDate?: DateTimeNullableFilter;
};
