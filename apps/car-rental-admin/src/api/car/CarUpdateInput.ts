import { RentalUpdateManyWithoutCarsInput } from "./RentalUpdateManyWithoutCarsInput";

export type CarUpdateInput = {
  color?: string | null;
  description?: string | null;
  licenseNumber?: string | null;
  model?: string | null;
  rentals?: RentalUpdateManyWithoutCarsInput;
};
