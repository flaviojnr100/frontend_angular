import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  rota:String = "home";
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  home(){
    this.rota = "home";
  }
  pessoa(){
    this.rota = "pessoa";
  }

  logout(){
    localStorage.removeItem('status');
    this.router.navigate(['']);
  }

}
