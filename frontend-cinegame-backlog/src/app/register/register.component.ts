import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public username = '';
  public email = '';
  public password = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
