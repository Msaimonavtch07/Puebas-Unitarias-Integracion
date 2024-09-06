import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MedicosComponent } from "./medicos.component"

import { MedicosService } from "./medicos.service";
import { HttpClientModule } from "@angular/common/http";

describe('Medicos component', () => {

  let component: MedicosComponent;
  let fixture: ComponentFixture<MedicosComponent>;

  beforeEach( () => {

    TestBed.configureTestingModule({

      declarations: [ MedicosComponent ],
      providers: [ MedicosService ],
      imports: [ HttpClientModule ]

    });

    fixture = TestBed.createComponent(MedicosComponent);
    component = fixture.componentInstance;

  });

  it('Debe de crearse el componente', () => {

    expect( component ).toBeTruthy();

  });

  it('Debe de retornar un Medico', () => {

    const nombre = 'Saimon';
    const res = component.saludarMedico( nombre );

    expect(res).toContain( nombre );

  });

})
