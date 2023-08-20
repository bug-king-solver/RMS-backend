import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksResolver } from './books.resolver';
import { BooksController } from './books.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaSelectService } from 'src/prisma/prisma-select.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [BooksController],
  providers: [
    BooksResolver,
    BooksService,
    PrismaService,
    PrismaSelectService
  ],
  imports: [PrismaModule],
})
export class BooksModule {}
