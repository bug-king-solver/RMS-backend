import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaSelectService } from 'src/prisma/prisma-select.service';
import { GraphQLResolveInfo } from 'graphql';
import { Prisma } from '@prisma/client';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  constructor(
    private prisma: PrismaService,
    private prismaSelectService: PrismaSelectService,
  ) {}

  public async create(createBookInput: CreateBookInput) {
    try {
      const data: Prisma.BookCreateInput = {
        ...createBookInput,
      }
      return this.prisma.book.create({ data });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async findAll(info?: GraphQLResolveInfo) {
    const select = this.prismaSelectService.getValue(info);
    return await this.prisma.book.findMany({...select});
  }

  public async findDrafts() {
    return await this.prisma.book.findMany({
      where: { published: false },
    });
  }

  public async findOne(id: number, info?: GraphQLResolveInfo) {
    const select = this.prismaSelectService.getValue(info);
    return await this.prisma.book.findUnique({
      ...select,
      where: { id },
      rejectOnNotFound: true
    });
  }

  public async update(id: number, updateBookInput: UpdateBookInput) {
    try {
      return await this.prisma.book.update({
        where: { id },
        data: updateBookInput,
      });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async remove(id: number): Promise<Book> {
    try {
      return await this.prisma.book.delete({ where: { id } });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }  
  }
}
