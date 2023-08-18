import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Book {
  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  body: string;

  @Field()
  published: boolean;
}