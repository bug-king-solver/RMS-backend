import { Resolver, Query, Mutation, Args, Int, Info } from '@nestjs/graphql';
import { BooksService } from './books.service';
import { Book } from './entities/book.entity';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { GraphQLResolveInfo } from 'graphql';

@Resolver(() => Book)
export class BooksResolver {
  constructor(private readonly booksService: BooksService) {}

  // Query
  @Query(() => [Book])
  public async findAll(info?: GraphQLResolveInfo) {
    return await this.booksService.findAll(info);
  }

  @Query(() => Book)
  public async findOne(@Args('id', { type: () => Int }) id: number, @Info() info?: GraphQLResolveInfo) {
    return this.booksService.findOne(id, info);
  }

  //Mutations

  @Mutation(() => Book)
  public async createBook(@Args('createBookInput') createBookInput: CreateBookInput) {
    return await this.booksService.create(createBookInput);
  }

  @Mutation(() => Book)
  public async updateBook(@Args('updateBookInput') updateBookInput: UpdateBookInput) {
    return this.booksService.update(updateBookInput.id, updateBookInput);
  }

  @Mutation(() => Book)
  public async removeBook(@Args('id', { type: () => Int }) id: number) {
    return await this.booksService.remove(id);
  }
}
