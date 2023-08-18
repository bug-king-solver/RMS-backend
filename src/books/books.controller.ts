import { Controller, Get, Post, Body, Put, Param, Delete, NotFoundException, Patch } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';

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

    @Patch(':id')
    update(@Param('id') id:string, @Body() updateBookInput: UpdateBookInput) {
        return this.booksService.update(+id, updateBookInput);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.booksService.remove(+id);
    }

}
