import { Component, OnInit } from '@angular/core';

import { MedicosService } from './medicos.service';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styles: ``
})
export class MedicosComponent implements OnInit {

  medicos: any[] = [];

  constructor(
    public medicosService: MedicosService,
  ) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  };

  saludarMedico( nombre: string ) {
    return `Hello ${nombre}`;
  };

  obtenerMedico() {

    this.medicosService.getMedicos()
        .subscribe( ( medicos: any ) => this.medicos = medicos)

  };

}
