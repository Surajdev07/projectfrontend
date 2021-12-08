import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'sectionone',
  templateUrl: './sectionone.component.html',
  styleUrls: ['./sectionone.component.css']
})
export class SectiononeComponent implements OnInit {
  grocery:any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8082/api/grocery/DAIRY').subscribe(data => {
      this.grocery = data;
      console.log(data);
  })
  }
  
}
