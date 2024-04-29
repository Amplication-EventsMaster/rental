import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RentalListRelationFilter } from "../rental/RentalListRelationFilter";

export type CustomerWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  rentals?: RentalListRelationFilter;
};
