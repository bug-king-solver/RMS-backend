import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksResolver } from './books.resolver';
import { BooksController } from './books.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [BooksController],
  providers: [BooksResolver, BooksService],
  imports: [PrismaModule]
})
export class BooksModule {}
