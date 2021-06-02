import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public mouseOverOpen: boolean = false;

  constructor(private router: Router, private cookieService: CookieService) {
  }

  ngOnInit(): void {
  }

  async navigateToOverviewWithParam(param: string): Promise<void> {
    await this.router.navigateByUrl('/overview/' + param)
  }

  async profile(): Promise<void> {

  }

  async logout(): Promise<void> {
    await this.cookieService.delete('auth')
    await this.router.navigate(['/login'])
  }
}
