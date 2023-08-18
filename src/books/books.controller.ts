import { Controller, Get, Post, Body, Put, Param, Delete, NotFoundException } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookInput } from './dto/create-book.input';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) {}

    @Post()
    create(@Body() createBookInput: CreateBookInput) {
        return this.booksService.create(createBookInput);
    }

    @Get()
    findAll() {
        return this.booksService.findAll();
    }

    @Get('drafts')
    findDrafts() {
        return this.booksService.findDrafts();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.booksService.findOne(+id);
    }

}
