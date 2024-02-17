import { NgModule, createComponent } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientCreateComponent } from './components/client-create/client-create.component';
import { ClientEditComponent } from './components/client-edit/client-edit.component';
import { ClientShowComponent } from './components/client-show/client-show.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientGradeComponent } from './components/client-grade/client-grade.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientDashboardComponent } from './components/client-dashboard/client-dashboard.component';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ClientCreateComponent,
    ClientEditComponent,
    ClientShowComponent,
    ClientListComponent,
    ClientGradeComponent,
    ClientDashboardComponent,
    NavBarComponent,
    PageNotFoundComponent,
  ],
  imports: [CommonModule, HttpClientModule, FormsModule, RouterModule],
  exports: [
    NavBarComponent,
    ClientCreateComponent,
    ClientDashboardComponent,
    ClientEditComponent,
    ClientGradeComponent,
    ClientListComponent,
    PageNotFoundComponent,
  ],
})
export class ClientModule {}
