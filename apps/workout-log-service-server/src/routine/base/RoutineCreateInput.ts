/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LogCreateNestedManyWithoutRoutinesInput } from "./LogCreateNestedManyWithoutRoutinesInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { WorkoutCreateNestedManyWithoutRoutinesInput } from "./WorkoutCreateNestedManyWithoutRoutinesInput";

@InputType()
class RoutineCreateInput {
  @ApiProperty({
    required: false,
    type: () => LogCreateNestedManyWithoutRoutinesInput,
  })
  @ValidateNested()
  @Type(() => LogCreateNestedManyWithoutRoutinesInput)
  @IsOptional()
  @Field(() => LogCreateNestedManyWithoutRoutinesInput, {
    nullable: true,
  })
  logs?: LogCreateNestedManyWithoutRoutinesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => WorkoutCreateNestedManyWithoutRoutinesInput,
  })
  @ValidateNested()
  @Type(() => WorkoutCreateNestedManyWithoutRoutinesInput)
  @IsOptional()
  @Field(() => WorkoutCreateNestedManyWithoutRoutinesInput, {
    nullable: true,
  })
  workouts?: WorkoutCreateNestedManyWithoutRoutinesInput;
}

export { RoutineCreateInput as RoutineCreateInput };
