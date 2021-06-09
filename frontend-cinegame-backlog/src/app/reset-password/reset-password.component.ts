import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  password: string;
  passwordConfirmation: string;

  valid: boolean;

  constructor(private router: Router, private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  async submit(): Promise<void> {
    if (!this.passwordAreEqual() || !this.passwordAreGreaterThanMinLength()) {
      this.valid = true;
    } else {
      await this.cookieService.delete('auth');
      await this.router.navigate(['/login']);
    }
  }

  private passwordAreEqual(): boolean {
    return this.passwordConfirmation === this.password;
  }

  private passwordAreGreaterThanMinLength(): boolean {
    return this.password && this.password.length > 5;
  }
}
