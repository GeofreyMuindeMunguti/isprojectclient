/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { Router} from '@angular/router';

@Component({
  selector: 'ngx-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  private loggedin: boolean;

  constructor(private router: Router,private analytics: AnalyticsService) {
    this.loggedin = true;
    if(this.loggedin){
      this.router.navigate(['/auth/login']);
    }
    else{
      this.router.navigate(['/pages/dashboard']);
    }
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
  }
}
