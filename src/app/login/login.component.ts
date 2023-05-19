import { Component, OnInit } from '@angular/core';
import { IUser, User } from '../models/user';
import { StoreServiceService } from '../service/store-service.service';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: IUser = new User()
  messageError !: string

  constructor(private storeService: StoreServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.storeService.saveStatus(204)
    this.messageError = "Error of connection"
  }

  onsubmit(value: IUser): void {
    this.login(value)
  }

  login(value: IUser): void {
    this.storeService.login(value)
    if (this.storeService.getStatus() == 204) {
      this.messageError = "Error of connection"
      console.log( this.messageError)
      //Baipasser la connexion
      this.logged()
    }else{
      this.messageError = "Connection réussit"
      console.log( this.messageError)
      this.logged()

    }
  }

  logged(): void {
    this.router.navigate(['/store'])
  }


}
