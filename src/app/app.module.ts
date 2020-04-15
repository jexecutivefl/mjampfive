import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AmplifyAngularModule, AmplifyService} from 'aws-amplify-angular';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/header/sidebar/sidebar.component';
import { SearchComponent } from './layout/search/search.component';
import { PatientComponent } from './patient/patient.component';
import { TransactionComponent } from './transaction/transaction.component';
import { CreatePatientComponent } from './patient/create-patient/create-patient.component';
import { CreateVisitComponent } from './visit/create-visit/create-visit.component';
import { VisitListComponent } from './visit/visit-list/visit-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { VisitItemComponent } from './visit/visit-item/visit-item.component';
import { SchedularComponent } from './schedular/schedular.component';
import {DayPilot, DayPilotModule} from 'daypilot-pro-angular';
import { NavbarComponent } from './layout/header/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    SearchComponent,
    PatientComponent,
    TransactionComponent,
    CreatePatientComponent,
    CreateVisitComponent,
    VisitListComponent,
    VisitItemComponent,
    SchedularComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAngularModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    DayPilotModule
  ],
  providers: [
    AmplifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
