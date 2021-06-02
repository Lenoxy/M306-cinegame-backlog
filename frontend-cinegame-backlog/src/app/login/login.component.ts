import {Component, OnInit} from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email = '';
  public password = '';

  constructor(private cookieService: CookieService, private router: Router) {
  }

  ngOnInit(): void {
  }

  login(): void {
    if (this.email === 'philip.baumann@sluz.ch' && this.password === 'hallovelo') {
      this.cookieService.set('auth', 'true');
      this.router.navigateByUrl('overview/movie')
    }
  }
}
