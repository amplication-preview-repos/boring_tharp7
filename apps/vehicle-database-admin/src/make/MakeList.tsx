import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  DateField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const MakeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Makes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <BooleanField label="Active" source="active" />
        <DateField source="created_at" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Make Name" source="make_name" />
        <DateField source="updated_at" label="Updated At" />
      </Datagrid>
    </List>
  );
};
