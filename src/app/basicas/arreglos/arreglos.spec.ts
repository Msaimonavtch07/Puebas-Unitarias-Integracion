import { cargarRobots } from "./arreglos"

describe('Prueba de Arreglos[]', () => {

  it('Debe de tener al menos 3 robots', () => {

    const res = cargarRobots();
    expect( res.length ).toBeGreaterThanOrEqual(3);

  });

  it('Debe de existir Megabox y Ultron', () => {

    const res = cargarRobots();
    expect( res ).toContain('Megabox')
    expect( res ).toContain('Ultron')

  });

})
