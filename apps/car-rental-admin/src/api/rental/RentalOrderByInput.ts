import { SortOrder } from "../../util/SortOrder";

export type RentalOrderByInput = {
  carId?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};
