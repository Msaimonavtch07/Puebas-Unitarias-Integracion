import { FormBuilder } from "@angular/forms";
import { formularioRegister } from "./formulario"

describe( 'Formularios', () => {

  let component: formularioRegister;

  beforeEach( () => {

    component = new formularioRegister( new FormBuilder() );

  });

  it( 'El formulario debe de tener dos campos, email y password', () => {

    expect( component.form.contains('email') ).toBeTruthy();
    expect( component.form.contains('password') ).toBeTruthy();

  });

  it( 'El campo email debe de ser obligatorio', () => {

    const control = component.form.get('email');
    control?.setValue('');

    expect( control?.valid ).toBeFalsy();

  });

  it( 'El campo email debe de ser obligatorio y valido', () => {

    const control = component.form.get('email');
    control?.setValue('Saimon@gmail.com');

    expect( control?.valid ).toBeTruthy();

  });

})
