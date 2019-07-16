import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  load = false;

  lastBookId: "";
  books: any = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
      this.http.post('http://localhost:3000/public/book/all',
        {bookId: "", perPage: 1000}
      ).subscribe(response => {
        this.books = response;
        this.lastBookId = this.books[this.books.length - 1]._id;
        this.load = true;
      });
  }

  @HostListener('window:scroll', ['$event']) onScroll(event) {
    const element = document.getElementById('listBook').lastElementChild as HTMLElement;
    if (this.load){
      if (document.scrollingElement.scrollTop + window.innerHeight >= element.offsetTop) {
        this.load = false;
        this.http.post('http://localhost:3000/public/book/all',
          {
            bookId: this.lastBookId,
            perPage: 1000
          }).subscribe(response => {
          this.books = this.books.concat(response);
          console.log(this.books.length);
          this.lastBookId = this.books[this.books.length - 1]._id;
          if(response[0]) {
            this.load = true;
          } else {
            this.load = false;
          }
        });
      };
    }
  }
}
