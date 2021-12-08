import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import { GlobalVariable } from 'src/app/global-variable';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoadingResults: boolean=false;


  ngOnInit(): void {
    localStorage.setItem("isLoggedIn","false")
  }
  private usersUrl: string;

  constructor(private http: HttpClient,private authService: AuthService, private router: Router) {
    this.usersUrl = 'http://localhost:8082/api/customer';
  }

  onsignin(a:any,b:any):any{
    // console.log("signin")
    // console.log(a.viewModel)
    // console.log(b.viewModel)
    let user={
      username:a.viewModel,
      password:b.viewModel

    }
//this.onFormSubmit(user);
this.save(a.viewModel, b.viewModel)
  }
  onsignup(a:any,b:any,c:any):any{
    console.log("signup")
    console.log(a.viewModel)
    console.log(b.viewModel)
    console.log(c.viewModel)
    let signupDet={
      username:a.viewModel, 
      email:b.viewModel,
      password:c.viewModel
    }
    this.savesignup(a.viewModel,b.viewModel,c.viewModel)
    //this.onSignupFormSubmit(signupDet)
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

  public save(email:string,password:string) {
    let user = {"email":email,"password":password}
    // console.log('sigintrack',user)
    // console.log(this.usersUrl + "/signin","id="+JSON.stringify(user)) 

    const headers = { 'content-type': 'application/json'}  
    let response =  this.http.post<any>(this.usersUrl + "/signin?id="+email+"-"+password,{'headers':headers}).subscribe();

    // let response = this.http.pot<any>(this.usersUrl + "/signin?id=","123");
   // GlobalVariable.isLoggedIn=true;
   localStorage.setItem("isLoggedIn","true")
    this.router.navigate([''])
  
     console.log(response)
  }


  public savesignup(username:string,email:string,password:string) {
    let user = {"email":email,"password":password}
    console.log('sigintrack',user)
    console.log(this.usersUrl + "/signin","id="+JSON.stringify(user)) 

    const headers = { 'content-type': 'application/json'}  
    let response =  this.http.post<any>(this.usersUrl + "/signup?id="+username+"-"+email+"-"+password,{'headers':headers}).subscribe();

    // let response = this.http.pot<any>(this.usersUrl + "/signin?id=","123");
     console.log(response)
  }
  onFormSubmit(value:any): void {
    this.isLoadingResults = true;
    this.authService.login(value)
      .subscribe(() => {
        this.isLoadingResults = false;
        this.router.navigate(['/secure']).then(_ => console.log('You are secure now!'));
      }, (err: any) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }
  onSignupFormSubmit(value:any): void {
    this.isLoadingResults = true;
    this.authService.register(value)
      .subscribe((res: any) => {
        this.isLoadingResults = false;
        this.router.navigate(['/login']).then(_ => console.log('You are registered now!'));
      }, (err: any) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
