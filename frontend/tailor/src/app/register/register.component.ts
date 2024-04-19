import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
   
  myForm:any;

    constructor(private route:Router,private http:HttpClient){
      // console.log("hitted")
      
    }

    ngOnInit(): void {
      this.myForm=new FormGroup({
        name:new FormControl("",Validators.required),
        mail:new FormControl("",Validators.required),
        password:new FormControl("",Validators.required),
        phone:new FormControl("",Validators.required)
      })
    }

    onSubmit=()=>{
      console.log(this.myForm.value)
      let response=this.http.post('http://localhost:4000/post',this.myForm.value).subscribe()
      console.log(response);
    }
    


  }
