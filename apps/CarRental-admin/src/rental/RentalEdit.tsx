import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";
import { CarTitle } from "../car/CarTitle";
import { CustomerTitle } from "../customer/CustomerTitle";

export const RentalEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="car.id" reference="Car" label="car">
          <SelectInput optionText={CarTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <DateTimeInput label="end date" source="endDate" />
        <DateTimeInput label="start date" source="startDate" />
      </SimpleForm>
    </Edit>
  );
};
