import { InputType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class CreateBookInput {
  @Field()
  @ApiProperty()
  title: string;

  @Field({ nullable: true })
  @ApiProperty()
  description?: string;

  @Field()
  @ApiProperty()
  body: string;

  @Field({ defaultValue: false })
  @ApiProperty()
  published?: boolean;
}
