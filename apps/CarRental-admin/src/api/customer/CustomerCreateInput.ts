import { RentalCreateNestedManyWithoutCustomersInput } from "./RentalCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  firstName?: string | null;
  rentals?: RentalCreateNestedManyWithoutCustomersInput;
};
