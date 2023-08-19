import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Book } from './entities/book.entity';

@Controller('books')
@ApiTags('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  @ApiCreatedResponse({ type: Book })
  create(@Body() createBookInput: CreateBookInput) {
    return this.booksService.create(createBookInput);
  }

  @Get()
  @ApiOkResponse({ type: Book, isArray: true })
  findAll() {
    return this.booksService.findAll();
  }

  @Get('drafts')
  @ApiOkResponse({ type: Book, isArray: true })
  findDrafts() {
    return this.booksService.findDrafts();
  }

  @Get(':id')
  @ApiOkResponse({ type: Book })
  findOne(@Param('id') id: string) {
    return this.booksService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: Book })
  update(@Param('id') id: string, @Body() updateBookInput: UpdateBookInput) {
    return this.booksService.update(+id, updateBookInput);
  }

  @Delete(':id')
  @ApiOkResponse({ type: Book })
  remove(@Param('id') id: string) {
    return this.booksService.remove(+id);
  }
}
