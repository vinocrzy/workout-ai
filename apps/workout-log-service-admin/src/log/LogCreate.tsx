import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { RoutineTitle } from "../routine/RoutineTitle";
import { UserTitle } from "../user/UserTitle";

export const LogCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
