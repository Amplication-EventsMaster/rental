import { RentalCreateNestedManyWithoutCarsInput } from "./RentalCreateNestedManyWithoutCarsInput";

export type CarCreateInput = {
  color?: string | null;
  licenseNumber?: string | null;
  model?: string | null;
  rentals?: RentalCreateNestedManyWithoutCarsInput;
};
