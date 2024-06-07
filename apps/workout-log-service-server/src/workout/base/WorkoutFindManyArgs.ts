/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { WorkoutWhereInput } from "./WorkoutWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { WorkoutOrderByInput } from "./WorkoutOrderByInput";

@ArgsType()
class WorkoutFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => WorkoutWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => WorkoutWhereInput, { nullable: true })
  @Type(() => WorkoutWhereInput)
  where?: WorkoutWhereInput;

  @ApiProperty({
    required: false,
    type: [WorkoutOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [WorkoutOrderByInput], { nullable: true })
  @Type(() => WorkoutOrderByInput)
  orderBy?: Array<WorkoutOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { WorkoutFindManyArgs as WorkoutFindManyArgs };