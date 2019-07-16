import { Component, OnInit } from '@angular/core';
import {HttpClient}from '@angular/common/http'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  listTag;
  tag:String;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    
  }
  onSumit(){
    let link = "http://localhost:3002/public/book/getTag?tag="+this.tag;
    console.log(this.listTag)
    this.listTag = this.http.get(link).subscribe(e=>{
      this.listTag = e; 
    })


  }

}
