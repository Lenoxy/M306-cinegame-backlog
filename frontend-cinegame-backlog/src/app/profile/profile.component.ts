import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public isEditable = true;
  public username = 'leo';
  public email = 'leo@gmx.com';

  constructor() { }

  ngOnInit(): void {
  }

  public onChange(): void {
    this.isEditable = !this.isEditable;
  }

  public done(): void {
    this.isEditable = true;
  }
}
