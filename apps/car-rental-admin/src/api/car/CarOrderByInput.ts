import { SortOrder } from "../../util/SortOrder";

export type CarOrderByInput = {
  color?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  licenseNumber?: SortOrder;
  model?: SortOrder;
  updatedAt?: SortOrder;
};
