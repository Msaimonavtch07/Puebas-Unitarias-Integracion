import { Jugador2 } from "./jugador-2"

describe( 'Prueba del Event Emiter', () => {

  let jugador: Jugador2;

  beforeEach( () => jugador = new Jugador2());

  it( 'Debe de emitir un evento cuando el jugador reciba un daño', () => {

    let hpNuevo = 0;

    jugador.cambiarhp.subscribe( hp => {
      hpNuevo = hp;
    })

    jugador.recibeDanio(1000)

    expect( hpNuevo ).toBe(0);

  });

  it( 'Debe de emitir un evento cuando el jugador reciba un daño y sea menor a 100', () => {

    let hpNuevo = 0;

    jugador.cambiarhp.subscribe( hp => hpNuevo = hp );

    jugador.recibeDanio(50)

    expect( hpNuevo ).toBe(50);

  });

})
