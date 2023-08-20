import { ObjectType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { BaseModel } from 'src/common/abstract-model/base.model';

@ObjectType('book')
export class Book extends BaseModel {
  @Field({ nullable: false })
  @ApiProperty()
  title: string;

  @Field({ nullable: false })
  @ApiProperty()
  description?: string;

  @Field({ nullable: false })
  @ApiProperty()
  body: string;

  @Field({ nullable: false })
  @ApiProperty()
  published: boolean;
}
