import { InputType, Field } from '@nestjs/graphql';

import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateBookInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  title: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  description?: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  body: string;

  @Field(() => Boolean, { defaultValue: false })
  published: boolean;
}
