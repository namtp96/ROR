import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  load = false;

  search = {
    keySearch: ""
  };
  keyValues: "";

  lastBookId: "";
  books: any = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {}

  @HostListener('window:scroll', ['$event']) onScroll(event) {
    const element = document.getElementById('listBook').lastElementChild as HTMLElement;
    if (this.load){
      if (document.scrollingElement.scrollTop + window.innerHeight >= element.offsetTop) {
        this.load = false;
        this.http.post('http://localhost:3000/public/book/search',
          {
            id: this.lastBookId,
            values: this.search.keySearch,
            perPage: 10
          }).subscribe(response => {
            console.log(this.books.length);
            this.books = this.books.concat(response);
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

  btnSearch() {
      if (this.search.keySearch) {
        this.http.post('http://localhost:3000/public/book/search',
          {id: "", values: this.search.keySearch, perPage: 10}
        ).subscribe(response => {
          if (!response[0]) {
              console.log("fafaf");
          } else {
              this.books = response;
              this.lastBookId = this.books[this.books.length - 1]._id;
              this.load = true;
          };
        });
      } else {
          this.books = [];
      }
  }
}
