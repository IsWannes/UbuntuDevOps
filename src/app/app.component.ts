import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TeamProject';
  constructor(private router: Router) {  }

  get IsHome() {
    return this.router.isActive('/Home', true)
  }

  get Status() {
    switch (this.router.url) {
      case '/oef1':
      case '/oef2':
        return "Closed"
      case '/oef3':
        return "In Progress"
      default:
        return "Todo"
    }
  }

  get Style() {
    switch (this.router.url) {
      case '/oef1':
      case '/oef2':
        return "ui-button-danger"
      case '/oef3':
        return "ui-button-success"
      default:
        return "Todo"
    }
  }
}
