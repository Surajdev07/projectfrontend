import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'sectiontwo',
  templateUrl: './sectiontwo.component.html',
  styleUrls: ['./sectiontwo.component.css']
})
export class SectiontwoComponent implements OnInit {
  grocery:any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8082/api/grocery/RICE').subscribe(data => {
      this.grocery = data;
  })
  }

}
