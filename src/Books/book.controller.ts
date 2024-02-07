import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { BookServices } from "./book.service";
import { Book } from "./data/book.dto";
import { BookPipe } from "./pipe/book.pipe";

@Controller("/book")
export class BookController{
    constructor(private bookservice:BookServices){

    }

    @Get("/all/books")
    fetchAllBook() : Book[]{
        return this.bookservice.getAllBooks();
    }

    // Here user the ParseIntPipe => It is generaly used to convert the type of Variavble.
    @Get("/find/book/:id")
    findeBook(@Param("id", ParseIntPipe) bookId) : Book{
        return this.bookservice.getSingleBook(bookId);
    }

    // In the body parameter we must be defined the bookpipe object to call the pipe validator service.
    @Post("/add/new/book")
    addNewBook(@Body(new BookPipe()) newbook) : Book{
        return this.bookservice.addBook(newbook);
    }

    @Put("/upadate/book")
    updateBook(@Body(new BookPipe()) updateBook) : Book{
        return this.bookservice.updateBook(updateBook);
    }

    // Here user the ParseIntPipe => It is generaly used to convert the type of Variavble.
    @Delete("/delete/book/:bookId")
    deleteBook(@Param("bookId",ParseIntPipe) bookId) : String{
        return this.bookservice.deleteSingleBook(bookId);
    }
}