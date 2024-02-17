import { Component, OnInit, inject, signal } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements OnInit {
  listStyleValue: string = '';
  showMenuStatus = signal<boolean>(false);

  ngOnInit(): void {}

  showMenu() {
    this.showMenuStatus.set(!this.showMenuStatus());
    console.log(this.showMenuStatus());
  }
}
