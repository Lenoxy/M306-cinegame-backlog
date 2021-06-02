import {Component} from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private cookieService: CookieService) {
  }
  title = 'Cinegame Backlog';

  authenticated(): boolean {
    return this.cookieService.get('auth') === 'true';
  }
}
