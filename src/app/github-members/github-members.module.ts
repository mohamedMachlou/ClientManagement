import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubMembersListComponent } from './github-members-list/github-members-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    GithubMembersListComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
    
  ],
  exports : [
    GithubMembersListComponent
  ]
})
export class GithubMembersModule {
 }
