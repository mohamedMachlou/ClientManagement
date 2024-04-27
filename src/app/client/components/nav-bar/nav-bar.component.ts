import { Component, OnInit, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements OnInit {
  listStyleValue: string = '';
  showMenuStatus = signal<boolean>(false);
  router = inject(Router);

  ngOnInit(): void {}

  showMenu() {
    this.showMenuStatus.set(!this.showMenuStatus());
    console.log(this.showMenuStatus());
  }
  goToHome() {
    this.router.navigate(['clientlist']);
  }
  goToCreateClient() {
    this.router.navigate(['createclient']);
  }
  goToNewGrade() {
    this.router.navigate(['clientgrade']);
  }
  goToGitHubMembers() {
    this.router.navigate(['githubmembers']);
  }
  goToContact() {
    this.router.navigate(['contact']);
  }
}
