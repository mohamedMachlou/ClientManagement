import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientCreateComponent } from './client/components/client-create/client-create.component';
import { ClientEditComponent } from './client/components/client-edit/client-edit.component';
import { ClientGradeComponent } from './client/components/client-grade/client-grade.component';
import { PageNotFoundComponent } from './client/components/page-not-found/page-not-found.component';
import { ClientListComponent } from './client/components/client-list/client-list.component';

const routes: Routes = [
  {
    path: '',
    component: ClientListComponent,
  },
  {
    path: 'createclient',
    component: ClientCreateComponent,
  },
  {
    path: 'editclient',
    component: ClientEditComponent,
  },
  {
    path: 'clientgrade',
    component: ClientGradeComponent,
  },
  {
    path: 'clientlist',
    component: ClientListComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
