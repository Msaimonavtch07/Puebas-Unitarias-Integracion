
/* describe('Pruebas de string')
it('Debe de contener un string'); */

import { mensaje } from "./string"

describe( 'Pruebas de Strings', () => {

  it('Debe de regresar un String', () => {

    const resp = mensaje('Saimon')

    expect( typeof resp ).toBe('string')

  });

  it('Debe de retornar en msg enviado', () => {

    const nombre = 'Manuel'
    const resp = mensaje(nombre)

    expect( resp ).toContain(nombre)

  });

});
