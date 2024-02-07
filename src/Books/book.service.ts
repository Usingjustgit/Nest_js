import { Book } from "./data/book.dto";

export class BookServices{
    public book:Book[] = [];
    public generatId = 1000;

    addBook(newBook : Book) : Book{
        newBook.id = this.generatId + 1;
        this.generatId++;
        this.book.push(newBook);
        return newBook;
    }

    getAllBooks() : Book[]{
        return this.book;
    }

    getSingleBook(bookId : Number) : Book{
        const findedBook = this.book.findIndex(book => book.id === bookId);
        return this.book[findedBook];
    }

    updateBook(updatedbook : Book) : Book{
        const findBookPosition = this.book.findIndex(book => book.id == updatedbook.id);
        this.book[findBookPosition] = updatedbook;
        return updatedbook;
    }

    deleteSingleBook(bookId : Number) : String{
        this.book = this.book.filter(book => book.id !== bookId);
        return `${bookId} id related all books deleted.`;
    }

}