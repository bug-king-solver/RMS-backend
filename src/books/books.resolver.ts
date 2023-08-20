import { Resolver, Query, Mutation, Args, Int, Info } from '@nestjs/graphql';
import { BooksService } from './books.service';
import { Book } from './entities/book.entity';
import { CreateBookInput } from './dto';
import { UpdateBookInput } from './dto';
import { GraphQLResolveInfo } from 'graphql';

@Resolver(() => Book)
export class BooksResolver {
  constructor(private readonly booksService: BooksService) {}

  // Query
  @Query(() => [Book])
  public async findAll(info?: GraphQLResolveInfo): Promise<Book[]> {
    return await this.booksService.findAll(info);
  }

  @Query(() => Book)
  public async findOne(@Args('id', { type: () => Int }) id: number, @Info() info?: GraphQLResolveInfo): Promise<Book> {
    return this.booksService.findOne(id, info);
  }

  //Mutations

  @Mutation(() => Book)
  public async createBook(@Args('createBookInput') createBookInput: CreateBookInput): Promise<Book> {
    return await this.booksService.create(createBookInput);
  }

  @Mutation(() => Book)
  public async updateBook(@Args('updateBookInput') updateBookInput: UpdateBookInput): Promise<Book> {
    return this.booksService.update(updateBookInput.id, updateBookInput);
  }

  @Mutation(() => Book)
  public async removeBook(@Args('id', { type: () => Int }) id: number): Promise<Book> {
    return await this.booksService.remove(id);
  }
}
