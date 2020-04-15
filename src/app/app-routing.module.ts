import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateVisitComponent} from './visit/create-visit/create-visit.component';
import {AuthGuard} from './auth.guard';
import {VisitListComponent} from './visit/visit-list/visit-list.component';
import {AuthComponent} from './auth/auth.component';
import {CreatePatientComponent} from './patient/create-patient/create-patient.component';


const routes: Routes = [
  {path: 'create-visit', component: CreateVisitComponent, canActivate: [AuthGuard]},
  {path: 'edit-visit/:visitId', component: CreateVisitComponent, canActivate: [AuthGuard]},
  {path: 'visit-list', component: VisitListComponent, canActivate: [AuthGuard]},
  {path: 'create-patient', component: CreatePatientComponent, canActivate: [AuthGuard]},
  {path: 'edit-patient/:patientId', component: CreatePatientComponent, canActivate: [AuthGuard]},
  {path: 'login', component: AuthComponent, pathMatch: 'full'},
  {path: '**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
