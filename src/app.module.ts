import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { BooksModule } from './books/books.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    PrismaModule, 
    BooksModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
