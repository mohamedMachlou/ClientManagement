import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientModule } from './client/client.module';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './client/components/nav-bar/nav-bar.component';
import { ClientCreateComponent } from './client/components/client-create/client-create.component';
import { ClientDashboardComponent } from './client/components/client-dashboard/client-dashboard.component';
import { ClientEditComponent } from './client/components/client-edit/client-edit.component';
import { ClientGradeComponent } from './client/components/client-grade/client-grade.component';
import { ClientListComponent } from './client/components/client-list/client-list.component';
import { PageNotFoundComponent } from './client/components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
