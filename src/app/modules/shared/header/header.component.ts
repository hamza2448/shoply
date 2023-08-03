import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit{

  DataExist=false
  showMenu: boolean = false;
  showLogout = false;
  loggedInUser: string | null = null;
constructor(public router:Router,private authService:AuthService) {
  
}

ngOnInit(): void {
  let userData:any=localStorage.getItem('#&#&#&#&#');
  if(userData !==null){
    userData=JSON.parse(userData);
    const fullName = userData.name;
  
   
    const firstSpaceIndex = fullName.indexOf(' ');
  
   
    const firstName = firstSpaceIndex !== -1 ? fullName.slice(0, firstSpaceIndex) : fullName;
    this.loggedInUser=firstName;
    this.DataExist=true
    console.log("userData",this.loggedInUser)
  }
}



  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

 
  
  

  logOut(){
    this.authService.loggedOut(localStorage.getItem('#####')).subscribe((data:any)=>{

    })
    localStorage.removeItem('#&#&#&#&#');
    localStorage.removeItem('#####');
    this.router.navigate(['/'])
    this.DataExist = false;
  }
    
  
}


