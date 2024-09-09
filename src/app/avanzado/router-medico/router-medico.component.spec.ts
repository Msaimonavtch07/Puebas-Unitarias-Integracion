import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterMedicoComponent } from './router-medico.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

class FakeRouter {
  navigate( params ) {}
};

class FakeActivated {
  /* params: Observable<any> = Observable.empty(); */

  private subsject = new Subject();

  push( valor: any ) {
    this.subsject.next(valor)
  };

  get params() {
    return this.subsject.asObservable();
  };

};

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RouterMedicoComponent],
      providers: [
        {provide: Router, useClass: FakeRouter},
        {provide: ActivatedRoute, useClass: FakeActivated},
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Pruebas Realizadas for me...

  it( 'Debe de redireccionar a Medicos cuando se guarde', () => {

    const router = TestBed.get( Router );
    const esp = spyOn( router, 'navigate');

    component.guardarMedicos();

    expect( esp ).toHaveBeenCalledWith( [ 'medicos', '123' ] );

  });

  it('Debe de colocar el id = nuevo', () => {

    component = fixture.componentInstance;

    const activatedRoute: FakeActivated = TestBed.get(ActivatedRoute);

    activatedRoute.push( {id: 'nuevo'} );

    expect(component.id).toBe('nuevo');

  });

});
