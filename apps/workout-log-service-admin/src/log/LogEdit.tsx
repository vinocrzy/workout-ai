import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { RoutineTitle } from "../routine/RoutineTitle";
import { UserTitle } from "../user/UserTitle";

export const LogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="completedWorkouts" source="completedWorkouts" />
        <DateTimeInput label="date" source="date" />
        <ReferenceInput source="routine.id" reference="Routine" label="routine">
          <SelectInput optionText={RoutineTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
