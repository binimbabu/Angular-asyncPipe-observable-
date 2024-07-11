import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  list = of([10, 20, 30]);
  show = of(true);
  data!: Observable<any>
  http: HttpClient = inject(HttpClient);
  constructor() {
    this.getList();
  }

  getList(): void {
    this.data = this.http.get(`https://jsonplaceholder.typicode.com/todos`);
  }
}
