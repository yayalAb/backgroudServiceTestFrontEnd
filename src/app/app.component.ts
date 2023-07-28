import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'EvaluationApp';
  res: any;
  Id: string = '1234567';
  index: number = 0;
  isNewUser: string = '1';
  imageSrc: string | null = null;

  constructor(private http: HttpClient) {}
  ngOnInit() {}

  requestSentFunc() {
    const params = new HttpParams()
      .set('Id', this.Id)
      .set('isNewUser', this.isNewUser)
      .set('Index', this.index.toString());
    this.index++;
    this.Id = '1234';
    this.http
      .get<any>(`http://192.168.1.2:8000`, { params })
      .subscribe((re) => {
        this.res = re;
        this.isNewUser = '0';
        // console.log('request sent ', re);
      });
  }

  // CheckConnection() {
  //   this.http.get<any>('http://192.168.1.9:8000').subscribe((re) => {
  //     this.res = re;
  //   });
  // }
}
