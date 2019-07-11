import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {  Book } from '../book/book.module'

@Component({
  selector: 'app-get-book',
  templateUrl: './get-book.component.html',
  styleUrls: ['./get-book.component.scss']
})
export class GetBookComponent implements OnInit {
  data: Book[]

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Book[]>('http://localhost:3000/book').subscribe(res => {
      console.log(res)
      this.data = res
    })
  }

}
