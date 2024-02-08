import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Book, BookDocument } from './schema/book.schema';
import { Model } from 'mongoose';
import { title } from 'process';

@Injectable()
export class BookService {

  constructor(@InjectModel(Book.name) private BookModel : Model<BookDocument>){

  }

  create(createBookDto: CreateBookDto) : Promise<Book>{
    const model = new this.BookModel();
    model.title = createBookDto.title;
    model.price = createBookDto.price;
    model.author = createBookDto.author;
    model.released = createBookDto.released;
    return model.save();
  }

  findAll() : Promise<Book[]> {
    return this.BookModel.find().exec();
  }

  findOne(id: string) : Promise<Book> {
    return this.BookModel.findById(id).exec();
  }

  update(id: string, updateBookDto: UpdateBookDto) {
    return this.BookModel.updateOne({_id : id},{
      title : updateBookDto.title,
      author : updateBookDto.author,
      price : updateBookDto.price,
      released : updateBookDto.released
    }).exec();
  }

  remove(id: string) {
    return this.BookModel.deleteOne({_id : id}).exec();
  }
}
