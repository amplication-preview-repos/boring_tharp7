import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
} from "react-admin";

export const MakeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="Active" source="active" />
        <TextInput label="Make Name" source="make_name" />
      </SimpleForm>
    </Edit>
  );
};
