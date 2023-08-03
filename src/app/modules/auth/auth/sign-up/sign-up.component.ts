import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  singUp = {
  name:'',
  email:'',
  password:'',
  role:"1"
}
  constructor(private apiService:ApiService) {
    
  }
  ngOnInit(): void {
    
  }
  onSignUp(){
this.apiService.postRequest('/register',this.singUp).subscribe({
  next:(data)=>{
    alert("User Register Successfully")
  },
  error:(err:HttpErrorResponse)=>{
    alert("Something Went Wrong")
  }

})
  }

}
