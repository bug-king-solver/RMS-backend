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
  public async create(@Body() createBookInput: CreateBookInput) {
    return await this.booksService.create(createBookInput);
  }

  @Get()
  @ApiOkResponse({ type: Book, isArray: true })
  public async findAll() {
    return await this.booksService.findAll();
  }

  @Get('drafts')
  @ApiOkResponse({ type: Book, isArray: true })
  public async findDrafts() {
    return await this.booksService.findDrafts();
  }

  @Get(':id')
  @ApiOkResponse({ type: Book })
  public async findOne(@Param('id') id: string) {
    return await this.booksService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: Book })
  public async update(@Param('id') id: string, @Body() updateBookInput: UpdateBookInput) {
    return await this.booksService.update(+id, updateBookInput);
  }

  @Delete(':id')
  @ApiOkResponse({ type: Book })
  public async remove(@Param('id') id: string) {
    return await this.booksService.remove(+id);
  }
}
