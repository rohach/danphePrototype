import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: 'home', title: 'Home', component: HomeComponent },
  {
    path: 'about',
    title: 'About',
    component: AboutComponent,
  },
  { path: 'pharmacy', title: 'Pharmacy', component: PharmacyComponent },
  { path: 'doctor', title: 'Doctor', component: DoctorComponent },
  { path: 'radiolody', title: 'Radiology', component: RadiologyComponent },
  { path: 'icu', title: 'ICU', component: IcuComponent },
  { path: 'ward', title: 'Ward', component: WardComponent },
  {
    path: 'ventillator',
    title: 'Ventillator',
    component: VentillatorComponent,
  },
  { path: 'utilities', title: 'Utilities', component: UtilitiesComponent },
  { path: 'reports', title: 'Reports', component: ReportsComponent },
  { path: 'lab', title: 'Labrotary', component: LabComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', title: '404 Not Found', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
