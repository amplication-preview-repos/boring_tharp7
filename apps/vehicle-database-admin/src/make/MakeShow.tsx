import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  DateField,
  TextField,
} from "react-admin";

export const MakeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="Active" source="active" />
        <DateField source="created_at" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Make Name" source="make_name" />
        <DateField source="updated_at" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
