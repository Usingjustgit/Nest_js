import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { BookServices } from "./book.service";
import { Book } from "./data/book.dto";

@Controller("/book")
export class BookController{
    constructor(private bookservice:BookServices){

    }

    @Get("/all/books")
    fetchAllBook() : Book[]{
        return this.bookservice.getAllBooks();
    }

    @Get("/find/book/:id")
    findeBook(@Param("id") bookId : Number) : Book{
        return this.bookservice.getSingleBook(bookId);
    }

    @Post("/add/new/book")
    addNewBook(@Body() newbook : Book) : Book{
        return this.bookservice.addBook(newbook);
    }

    @Put("/upadate/book")
    updateBook(@Body() updateBook: Book) : Book{
        return this.bookservice.updateBook(updateBook);
    }

    @Delete("/delete/book/:bookId")
    deleteBook(@Param("bookId") bookId : Number) : String{
        return this.bookservice.deleteSingleBook(bookId);
    }
}