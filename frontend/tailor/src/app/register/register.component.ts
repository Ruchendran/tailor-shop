import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  responseData:any='';
  myForm:any;
  emptyInput:boolean=false;
    constructor(private route:Router,private http:HttpClient){
      // console.log("hitted")
      
    }

    ngOnInit(): void {
      this.myForm=new FormGroup({
        name:new FormControl('',Validators.required),
        mail:new FormControl('',Validators.required),
        password:new FormControl('',Validators.required),
        phone:new FormControl('',Validators.required)
      })
    }

    onSubmit=()=>{
      if(this.myForm.value.name !==''  || this.myForm.value.mail !==''  || this.myForm.value.password !=='' && this.myForm.value.phoneno !==''){
        this.emptyInput=false;
        this.http.post('http://localhost:4000/post',this.myForm.value).subscribe((response)=>{
          this.responseData=response;
          if(this.responseData.statusCode===200){
            this.route.navigate(['']);
          }
        })
      }
      else{
        this.emptyInput=true;
        }
      
    }
    


  }
