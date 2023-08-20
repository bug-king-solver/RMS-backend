import { InputType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateBookInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  title: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  description?: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  body: string;

  @Field(() => Boolean, { defaultValue: false })
  @ApiProperty()
  published: boolean;
}
