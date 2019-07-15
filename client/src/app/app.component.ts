import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  lastID = 0
  data
  load = false

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('http://localhost:3002/admin/user/getUser/name/a/' + this.lastID).subscribe(res => {
      if (res[0]) {
        this.data = res
        this.load = true
        this.lastID = this.data[this.data.length - 1]._id
      } else {
        this.load = false
      }
    })
  }

  @HostListener('window:scroll', ['$event']) onScroll(event) {
    if (this.load) {
      if (document.scrollingElement.scrollTop + window.innerHeight >= document.getElementById('listUsers').lastElementChild.offsetTop) {
        this.load = false
        this.http.get('http://localhost:3002/admin/user/getUser/name/a/' + this.lastID).subscribe(res => {
          
          if (res[0]) {
            this.data = this.data.concat(res)
            this.load = true
  
            this.lastID = this.data[this.data.length - 1]._id
            console.log(this.data)
          } else this.load = false
        })
      }
    }
  }
}
