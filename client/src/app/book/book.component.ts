import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'

import { Book } from './book.module';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  book = new Book;
  bookForm: FormGroup;

  bookValidate = [
    { name: 'title', type: 'text', validate: { required: 'required', minl: 2, maxl: 40 } },
    { name: 'price', type: 'number', validate: { required: false, minl: 1, maxl: 15 } },
    { name: 'rating', type: 'select', validate: { required: 'required', minl: 0, maxl: 5 } },
    { name: 'author', type: 'text', validate: { required: false, minl: 2, maxl: 40 } },
    { name: 'publisher', type: 'text', validate: { required: 'required', minl: 2, maxl: 40 } },
    { name: 'published', type: 'text', validate: { required: 'required', minl: 2, maxl: 40 } },
    { name: 'pages', type: 'number', validate: { required: 'required', minl: 1, maxl: 6 } },
    { name: 'language', type: 'text', validate: { required: 'required', minl: 2, maxl: 40 } },
    { name: 'format', type: 'text', validate: { required: 'required', minl: 1, maxl: 40 } },
    { name: 'isbn10', type: 'text', validate: { required: 'required', minl: 10, maxl: 10 } },
    { name: 'isbn13', type: 'text', validate: { required: 'required', minl: 13, maxl: 13 } }
  ]

  constructor(private fb: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.creatForms()
  }

  creatForms() {
    this.bookForm = this.fb.group({
      title: new FormControl(this.book.title, Validators.compose([
        Validators.minLength(this.bookValidate.find(item => item.name === 'title').validate.minl),
        Validators.maxLength(this.bookValidate.find(item => item.name === 'title').validate.maxl),
        Validators.required
      ])),
      price: new FormControl(this.book.price, Validators.compose([
        Validators.minLength(this.bookValidate.find(item => item.name === 'price').validate.minl),
        Validators.maxLength(this.bookValidate.find(item => item.name === 'price').validate.maxl)
      ])),
      rating: new FormControl(this.book.rating, Validators.compose([
        Validators.required,
        Validators.minLength(this.bookValidate.find(item => item.name === 'rating').validate.minl),
        Validators.maxLength(this.bookValidate.find(item => item.name === 'rating').validate.maxl)
      ])),
      author: new FormControl(this.book.author, Validators.compose([
        Validators.minLength(this.bookValidate.find(item => item.name === 'author').validate.minl),
        Validators.maxLength(this.bookValidate.find(item => item.name === 'author').validate.maxl),
        Validators.pattern('[a-zA-Z \.\,]*')
      ])),
      publisher: new FormControl(this.book.publisher, Validators.compose([
        Validators.required,
        Validators.minLength(this.bookValidate.find(item => item.name === 'publisher').validate.minl),
        Validators.maxLength(this.bookValidate.find(item => item.name === 'publisher').validate.maxl)
      ])),
      published: new FormControl(this.book.published, Validators.compose([
        Validators.required,
        Validators.minLength(this.bookValidate.find(item => item.name === 'published').validate.minl),
        Validators.maxLength(this.bookValidate.find(item => item.name === 'published').validate.maxl)
      ])),
      pages: new FormControl(this.book.pages, Validators.compose([
        Validators.required,
        Validators.minLength(this.bookValidate.find(item => item.name === 'pages').validate.minl),
        Validators.maxLength(this.bookValidate.find(item => item.name === 'pages').validate.maxl)
      ])),
      language: new FormControl(this.book.language, Validators.compose([
        Validators.required,
        Validators.minLength(this.bookValidate.find(item => item.name === 'language').validate.minl),
        Validators.maxLength(this.bookValidate.find(item => item.name === 'language').validate.maxl)
      ])),
      format: new FormControl(this.book.format, Validators.compose([
        Validators.required,
        Validators.minLength(this.bookValidate.find(item => item.name === 'format').validate.minl),
        Validators.maxLength(this.bookValidate.find(item => item.name === 'format').validate.maxl)
      ])),
      isbn10: new FormControl(this.book.isbn10, Validators.compose([
        Validators.required,
        Validators.minLength(this.bookValidate.find(item => item.name === 'isbn10').validate.minl),
        Validators.maxLength(this.bookValidate.find(item => item.name === 'isbn10').validate.maxl)
      ])),
      isbn13: new FormControl(this.book.isbn13, Validators.compose([
        Validators.required,
        Validators.minLength(this.bookValidate.find(item => item.name === 'isbn13').validate.minl),
        Validators.maxLength(this.bookValidate.find(item => item.name === 'isbn13').validate.maxl)
      ]))
    })
  }

  onSubmit() {
    this.http.post('http://localhost:3000/book', this.book).subscribe(res => console.log(res))
  }
}
