import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-get-gitlab-users',
  templateUrl: './get-gitlab-users.component.html',
  styleUrls: ['./get-gitlab-users.component.scss']
})
export class GetGitlabUsersComponent implements OnInit {
  data;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/getGlUsers')
      .subscribe(res => {
        this.data = res;
        console.log(this.data)
      })

  }

}
