import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'register',loadChildren:()=>import("./register/register.module").then(m=>m.RegisterModule)
  },
  {
    path:'',loadChildren:()=> import("./home/home.module").then(m=>m.HomeModule)
  },
  {
    path:"shop",loadChildren:()=>import("./shop/shop.module").then(m=>m.ShopModule)
  },
  {
    path:'login',loadChildren:()=>import("./login/login.module").then(m=>m.LoginModule)
  },
  {
    path:'contact-us',loadChildren:()=>import("./contactus/contactus.module").then(m=>m.ContactusModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
