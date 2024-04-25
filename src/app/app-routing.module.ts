import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RdvComponent } from './rdv/rdv.component';
import { AtttComponent } from './attt/attt.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { CodeComponent } from './code/code.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  { path: '', component: AtttComponent },
  { path: 'rendezvous', component: RdvComponent },
  { path: 'authentification', component: AuthentificationComponent },
  { path: 'code', component: CodeComponent },
  { path: 'service', component: ServiceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
