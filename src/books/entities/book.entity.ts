import { ObjectType, Field } from '@nestjs/graphql';
import { BaseModel } from 'src/common/abstract-model/base.model';

@ObjectType('book')
export class Book extends BaseModel {
  @Field({ nullable: false })
  title: string;

  @Field({ nullable: false })
  description?: string;

  @Field({ nullable: false })
  body: string;

  @Field({ nullable: false })
  published: boolean;
}
