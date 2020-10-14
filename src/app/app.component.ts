import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(public authService: AuthService, private router: Router){}

  ngOnInit(){}
  
  logout(){
    this.authService.logOut();
    this.router.navigateByUrl('/auth');
  }
  login(){
    this.router.navigateByUrl('/auth');
  }
  
}
