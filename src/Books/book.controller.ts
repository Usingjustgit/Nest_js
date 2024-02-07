import { BadRequestException, Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Post, Put, UseFilters, ValidationPipe } from "@nestjs/common";
import { BookServices } from "./book.service";
import { Book } from "./data/book.dto";
import { BookExceptionFilter } from "src/custom_error/book.exception.filter";

@Controller("/book")
export class BookController{
    constructor(private bookservice:BookServices){

    }

    @Get("/all/books")
    @UseFilters(new BookExceptionFilter())
    fetchAllBook() : Book[]{
        throw new BadRequestException();
        return this.bookservice.getAllBooks();
    }

    // Here user the ParseIntPipe => It is generaly used to convert the type of Variavble.
    @Get("/find/book/:id")
    findeBook(@Param("id", ParseIntPipe) bookId) : Book{
        return this.bookservice.getSingleBook(bookId);
    }

    // Now we will use the build validator class to verify the class varibles type...
    @Post("/add/new/book")
    addNewBook(@Body(new ValidationPipe()) newbook) : Book{
        return this.bookservice.addBook(newbook);
    }

    @Put("/upadate/book")
    updateBook(@Body(new ValidationPipe()) updateBook) : Book{
        return this.bookservice.updateBook(updateBook);
    }

    // Here user the ParseIntPipe => It is generaly used to convert the type of Variavble.
    @Delete("/delete/book/:bookId")
    deleteBook(@Param("bookId",ParseIntPipe) bookId) : String{
        return this.bookservice.deleteSingleBook(bookId);
    }
}