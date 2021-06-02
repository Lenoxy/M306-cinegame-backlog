import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  password: string;
  passwordConfirmation: string;

  valid: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  async submit(): Promise<void> {
    if (!this.passwordAreEqual() || !this.passwordAreGreaterThanMinLength()) {
      this.valid = true;
    } else {
      await this.router.navigate(['/']);
    }
  }

  passwordAreEqual(): boolean {
    return this.passwordConfirmation === this.password;
  }

  private passwordAreGreaterThanMinLength(): boolean {
    return this.password && this.password.length > 5;
  }
}
