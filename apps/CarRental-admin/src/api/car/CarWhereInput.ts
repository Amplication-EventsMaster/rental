import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RentalListRelationFilter } from "../rental/RentalListRelationFilter";

export type CarWhereInput = {
  color?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  licenseNumber?: StringNullableFilter;
  model?: StringNullableFilter;
  rentals?: RentalListRelationFilter;
};
