import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { GlobalVariable } from '../global-variable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
//loggedIn=GlobalVariable.isLoggedIn;
loggedIn:boolean=false
  public totalItem : number = 0;
  public searchTerm : string = '';
  constructor(private cartService :CartService) { }

  ngOnInit(): void {
    let temp = localStorage.getItem("isLoggedIn")
    if(temp=="true"){
      this.loggedIn=true
    }
    else{
      this.loggedIn=false
    }
        this.cartService.getProducts()
        .subscribe(res=>{
         this.totalItem = res.length;
        })
      }
      search(event:any){
        this.searchTerm = (event.targrt as HTMLInputElement).value;
        console.log(this.searchTerm);
      }
    
    }
    
