import { ObjectType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

@ObjectType()
export class Book {
  @Field()
  @ApiProperty()
  title: string;

  @Field({ nullable: true })
  @ApiProperty()
  description?: string;

  @Field()
  @ApiProperty()
  body: string;

  @Field()
  @ApiProperty()
  published: boolean;
}
