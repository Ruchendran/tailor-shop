import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  headerSections:any=[
    {
      headerName:"Home",
      link:'home'
    },
    {
      headerName:"Shop",
      link:'shop'
    },
    {
      headerName:"Log In",
      link:'login'
    },
    {
      headerName:"Register",
      link:'register'
    },
    {
      headerName:"Contact Us"
    }

  ]

  constructor() { }
}
