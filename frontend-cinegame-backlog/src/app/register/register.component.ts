import {Component, OnInit} from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public username = '';
  public email = '';
  public password = '';

  constructor(private cookieService: CookieService) {
  }

  ngOnInit(): void {
  }

  register(): void {
    if (this.email === 'philip.baumann@sluz.ch' && this.password === 'hallovelo') {
      this.cookieService.set('auth', 'true');
      console.log('success');
    }
  }

}
