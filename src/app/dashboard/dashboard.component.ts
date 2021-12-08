import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  ngOnInit(): void {
  }

  private adminUrl: string;
  private adminUrl1: string;  
  constructor(private http: HttpClient) { 
    this.adminUrl = 'http://localhost:8082/api/Categories';
    this.adminUrl1 = 'http://localhost:8082/api/grocery';
  }

  
  onaddcategory(a:any,b:any,c:any,d:any):any{
    console.log("onaddcategory")
    console.log(a.viewModel)
    console.log(b.viewModel)
    console.log(c.viewModel)
    console.log(d.viewModel)
    this.savecategory(a.viewModel,b.viewModel,c.viewModel,d.viewModel)
  }

  onaddgrocery(a:any,b:any,c:any,d:any, e:any, f:any, g:any, h:any):any{
    console.log("onaddgrocery")
    console.log(a.viewModel)
    console.log(b.viewModel)
    console.log(c.viewModel)
    console.log(d.viewModel)
    console.log(e.viewModel)
    console.log(f.viewModel)
    console.log(g.viewModel)
    console.log(h.viewModel)
    this.savegrocery(a.viewModel,b.viewModel,c.viewModel,d.viewModel, e.viewModel, f.viewModel, g.viewModel, h.viewModel)
  }

  public savecategory(categoryIdentifier:string,categoryName:string,imageLink:string,routerLink:string) {
    let category = {"categoryIdentifier":categoryIdentifier,"categoryName":categoryName,"imageLink":imageLink,"routerLink":routerLink}
    console.log('addcategorytrack',category)
    console.log(this.adminUrl + "/add","id="+JSON.stringify(category)) 

    const headers = {'content-type': 'application/json'}  
    let response =  this.http.post<any>(this.adminUrl + "/add?id="+categoryIdentifier+"-"+categoryName+"-"+imageLink+"-"+routerLink,{'headers':headers}).subscribe();

     console.log(response)
     
  } 



  public savegrocery(categoryIdentifier1:string, groceryidentifier:string, groceryName:string, imageLink1:string, netPrice:string, offerIdentifier:string, price:string, quantityAvailable:string) {
    let grocery = {"categoryIdentifier1":categoryIdentifier1,"groceryidentifier":groceryidentifier,"groceryName":groceryName,"imageLink1":imageLink1,"netPrice":netPrice,"offerIdentifier":offerIdentifier,"price":price,"quantityAvailable":quantityAvailable}
    console.log('addgrocerytrack',grocery)
    console.log(this.adminUrl1 + "/add","id="+JSON.stringify(grocery)) 

    const headers = {'content-type': 'application/json'}  
    let response =  this.http.post<any>(this.adminUrl1 + "/add?id="+categoryIdentifier1+"-"+groceryidentifier+"-"+groceryName+"-"+imageLink1+"-"+netPrice+"-"+offerIdentifier+"-"+price+"-"+quantityAvailable,{'headers':headers}).subscribe();

     console.log(response)
     
  } 


}
