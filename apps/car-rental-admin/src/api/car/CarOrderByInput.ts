import { SortOrder } from "../../util/SortOrder";

export type CarOrderByInput = {
  color?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  licenseNumber?: SortOrder;
  model?: SortOrder;
  updatedAt?: SortOrder;
};
