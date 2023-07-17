import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shoply';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  isLoginPage(): boolean {
    return this.activatedRoute.firstChild?.routeConfig?.path === 'login' ||
           this.activatedRoute.firstChild?.routeConfig?.path === 'sign-up';
  }
}
