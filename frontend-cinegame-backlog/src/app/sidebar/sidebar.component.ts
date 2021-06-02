import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  async navigateToOverviewWithParam(film: string): Promise<void> {
    await this.router.navigate(['/overview'], );
  }

  async logout(): Promise<void> {
    await this.router.navigate(['/login']);
  }
}
