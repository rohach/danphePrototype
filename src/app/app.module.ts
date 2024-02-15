import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { DoctorComponent } from './doctor/doctor.component';
import { RadiologyComponent } from './radiology/radiology.component';
import { IcuComponent } from './icu/icu.component';
import { WardComponent } from './ward/ward.component';
import { VentillatorComponent } from './ventillator/ventillator.component';
import { UtilitiesComponent } from './utilities/utilities.component';
import { ReportsComponent } from './reports/reports.component';
import { LabComponent } from './lab/lab.component';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    PharmacyComponent,
    DoctorComponent,
    RadiologyComponent,
    IcuComponent,
    WardComponent,
    VentillatorComponent,
    UtilitiesComponent,
    ReportsComponent,
    LabComponent,
    ErrorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
