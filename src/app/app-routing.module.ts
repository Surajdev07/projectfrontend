import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AboutComponent } from './components/about/about.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { SectionfourComponent } from './components/sectionfour/sectionfour.component';
import { SectiononeComponent } from './components/sectionone/sectionone.component';
import { SectionthreeComponent } from './components/sectionthree/sectionthree.component';
import { SectiontwoComponent } from './components/sectiontwo/sectiontwo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderreceiptComponent } from './orderreceipt/orderreceipt.component';
import { NotFoundComponent } from './not-found/not-found.component';



const routes: Routes = [
  {
    path:"about",
    component:AboutComponent,
    pathMatch:"full"
  },
  {
    path:"contactus",
    component:ContactusComponent,
    pathMatch:"full"
  },
  {
    path:"login",
    component:LoginComponent,
    pathMatch:"full"
  },
  {
    path:"sectionone",
    component:SectiononeComponent,
    pathMatch:"full"
  },
  {
    path:"sectiontwo",
    component:SectiontwoComponent,
    pathMatch:"full"
  },
  {
    path:"sectionthree",
    component:SectionthreeComponent,
    pathMatch:"full"
  },
  {
    path:"sectionfour",
    component:SectionfourComponent,
    pathMatch:"full"
  },
  {
    path:"cart",
    component:CartComponent,
    pathMatch:"full"
  },
  {
    path:"products",
    component:ProductsComponent,
    pathMatch:"full"
  },
  {
    path:"adminlogin",
    component:AdminloginComponent,
    pathMatch:"full"
  },
  {
    path:"dashboard",
    component:DashboardComponent,
    pathMatch:"full"
  },
  {
    path:"orderreceipt",
    component:OrderreceiptComponent,
    pathMatch:"full"
  },
  {
    path:"404",
    component: NotFoundComponent,
    pathMatch:"full"
  },
  {
    path:"",
    component:HomeComponent,
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
