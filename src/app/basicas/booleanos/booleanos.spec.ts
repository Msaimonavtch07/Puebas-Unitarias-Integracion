import { usuarioLogin } from "./booleanos"

describe('Puebas de Booleanos', () => {

  it('Debe de retornar un True', () => {

    const res = usuarioLogin();

    expect( res ).toBeTruthy();

  });

})
