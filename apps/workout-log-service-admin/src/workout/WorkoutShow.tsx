import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { ROUTINE_TITLE_FIELD } from "../routine/RoutineTitle";

export const WorkoutShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="reps" source="reps" />
        <ReferenceField label="Routine" source="routine.id" reference="Routine">
          <TextField source={ROUTINE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="sets" source="sets" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="weight" source="weight" />
      </SimpleShowLayout>
    </Show>
  );
};
