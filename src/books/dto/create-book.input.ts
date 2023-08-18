import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateBookInput {
  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  body: string;

  @Field({ defaultValue: false })
  published?: boolean;
}