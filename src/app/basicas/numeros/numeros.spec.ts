import { incrementar } from "./numeros"

describe( 'Pueba de Numeros', () => {

  it( 'Cualquier numero mayor a cien en la tabla, retornara cien', () => {

    const res = incrementar(300);

    expect( res ).toBe(100);

  });

  it( 'Cualquier numero menor a cien en la tabla, retornara numero + 1', () => {

    const res = incrementar(50);

    expect( res ).toBe(51);

  });

})
