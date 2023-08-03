import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginData = {
    email: '',
    password: '',
  };
  constructor(private router: Router, private authService: AuthService) {}
  ngOnInit(): void {}
  onLogin() {
    this.authService.login(this.loginData).subscribe({
      next: (data: any) => {
      
        localStorage.setItem('#####',data.token);
          console.log(data.token)

        localStorage.setItem("#&#&#&#&#",JSON.stringify(data.user));// set userData
        this.router.navigate(['/']);
        alert('User Login Successfully');

      },
      error:(err:HttpErrorResponse)=>{
        alert("Something Went Wrong")
      }
    });
  }

  
}
