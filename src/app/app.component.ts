import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'EvaluationApp';
  res: any;
  constructor(private http: HttpClient) {}
  ngOnInit() {}

  requestSentFunc() {
    this.http.get<any>('http://localhost:8000/true').subscribe((re) => {
      console.log('request sent ', re);
    });
  }
  CheckConnection() {
    this.http.get<any>('http://localhost:8000').subscribe((re) => {
      console.log('request sent ', re);
    });
  }
}
