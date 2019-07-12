import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {  Book } from '../book/book.module'
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-get-book',
  templateUrl: './get-book.component.html',
  styleUrls: ['./get-book.component.scss']
})
export class GetBookComponent implements OnInit {
  data: Book[]
  searchForm: FormGroup

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      input: new FormControl('')
    })
  }

  search(val){
    this.data = []
    this.http.get<Book[]>('http://localhost:3000/book/search/' + val.input).subscribe(res => this.data = res)
  }
}
