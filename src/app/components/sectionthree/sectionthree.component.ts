import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sectionthree',
  templateUrl: './sectionthree.component.html',
  styleUrls: ['./sectionthree.component.css']
})
export class SectionthreeComponent implements OnInit {
  grocery:any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8080/api/grocery/list').subscribe(data => {
      this.grocery = data;
  })
  }

}
