import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { RoutineTitle } from "../routine/RoutineTitle";

export const WorkoutEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="reps" source="reps" />
        <ReferenceInput source="routine.id" reference="Routine" label="Routine">
          <SelectInput optionText={RoutineTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="sets" source="sets" />
        <NumberInput label="weight" source="weight" />
      </SimpleForm>
    </Edit>
  );
};
