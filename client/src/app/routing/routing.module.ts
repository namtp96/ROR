import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BookComponent} from '../book/book.component';
import {SearchBookComponent} from '../book/serach-book/search-book.component';

const routes: Routes = [
  {
    path: 'book/all',
    component: BookComponent
  },
  {
    path: "home/page",
    component: SearchBookComponent
  }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
