import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
/* import { NavbarComponent } from './avanzado/navbar/navbar.component'; */

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      declarations: [
        AppComponent,
        /* NavbarComponent */
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Pruebas'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Pruebas');
  });

  /* it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, Pruebas');
  }); */

  it( 'Debe de tener un router-outlet', () => {

    const fixture = TestBed.createComponent(AppComponent);

    const elem = fixture.debugElement.query( By.directive( RouterOutlet ) );

    expect( elem ).not.toBeNull();

  });

  /* xit('Debe de tener un link a la pagina de Medicos...', () => {

    const fixture = TestBed.createComponent(AppComponent);

    const elementos = fixture.debugElement.queryAll( By.directive( RouterLinkWithHref ) );

    let existe = false;

    for( const elem of elementos ) {

      if( elem.attributes['routerLink'] === '/medicos' ) {
        existe = true;
        break
      }

    };

  }); */

});
