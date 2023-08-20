import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateBookInput {  
  @Field(() => Int)
  id: number;

  @Field(() => String, {nullable: true})
  title: string;

  @Field(() => String, {nullable: true})
  description: string;

  @Field(() => String, {nullable: true})
  body: string;

  @Field(() => Boolean, {defaultValue: false})
  published: boolean;
}
