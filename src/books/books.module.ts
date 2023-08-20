import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksResolver } from './books.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaSelectService } from 'src/prisma/prisma-select.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [],
  providers: [
    BooksResolver,
    BooksService,
    PrismaService,
    PrismaSelectService
  ],
  imports: [PrismaModule],
})
export class BooksModule {}
