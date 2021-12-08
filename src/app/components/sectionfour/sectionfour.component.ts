import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sectionfour',
  templateUrl: './sectionfour.component.html',
  styleUrls: ['./sectionfour.component.css']
})
export class SectionfourComponent implements OnInit {
  grocery:any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8080/api/grocery/list').subscribe(data => {
      this.grocery = data;
  })
  }

}
