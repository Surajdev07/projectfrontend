import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orderreceipt',
  templateUrl: './orderreceipt.component.html',
  styleUrls: ['./orderreceipt.component.css']
})
export class OrderreceiptComponent implements OnInit {
  
  orderreceipt:any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8080/api/orders/all').subscribe(data => {
      this.orderreceipt = data;
      console.log(data);
    })
    }


}
