import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MedicosService } from './intermedio-2/medicos/medicos.service';

import { HospitalComponent } from './intermedio-2/hospital/hospital.component';
import { IncrementadorComponent } from './intermedio-2/incrementador/incrementador.component';
// import { MedicosComponent } from './intermedio/espias/medicos.component';

@NgModule({
  declarations: [
    AppComponent,
    HospitalComponent,
    IncrementadorComponent
    // MedicosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    MedicosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
