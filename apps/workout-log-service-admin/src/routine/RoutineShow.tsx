import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ROUTINE_TITLE_FIELD } from "./RoutineTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const RoutineShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Log" target="routineId" label="Logs">
          <Datagrid rowClick="show">
            <TextField label="completedWorkouts" source="completedWorkouts" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="date" source="date" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="routine"
              source="routine.id"
              reference="Routine"
            >
              <TextField source={ROUTINE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Workout"
          target="routineId"
          label="Workouts"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="name" source="name" />
            <TextField label="reps" source="reps" />
            <ReferenceField
              label="Routine"
              source="routine.id"
              reference="Routine"
            >
              <TextField source={ROUTINE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="sets" source="sets" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="weight" source="weight" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
