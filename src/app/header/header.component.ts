import { Component, OnInit } from '@angular/core';
import { StoreServiceService } from '../service/store-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private storeService: StoreServiceService,
    private route: Router) { }

  ngOnInit(): void {
  }

  onLoggout(): void{
    this.storeService.saveStatus(204)
    this.logout()
  }

  logout(): void {
    this.route.navigate(['/login'])
  }
}
