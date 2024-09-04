import { jugadores } from "./clase"

describe( 'Pruebas de clases', () => {

  const jugador = new jugadores();

  beforeEach( () => {
    /* console.log(beforeEach) */
    jugador.hp = 100
  });
  beforeAll( () => {
    /* console.log(beforeAll) */
  });
  afterAll( () => {
    /* console.log(afterAll) */
  });
  afterEach( () => {
    /* console.log(afterEach) */
  });

  it( 'Debe de retornar 80, si el daño es de 20', () => {

    /* const jugador = new jugadores(); */
    const res = jugador.recibeDanio(20);

    expect( res ).toBe(80);

  });

  it( 'Debe de retornar 50, si el daño es de 50', () => {

    /* const jugador = new jugadores(); */
    const res = jugador.recibeDanio(50);

    expect( res ).toBe(50);

  });

})
