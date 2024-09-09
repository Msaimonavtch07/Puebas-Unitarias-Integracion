import { RUTAS } from "./app.routes";

import { MedicosComponent } from "../../intermedio-2/medicos/medicos.component";

describe( 'Rutas principales', () => {

  it( 'Debe de existir la ruta /medico/:id', () => {

    expect( RUTAS ).toContain(
      { path: 'medico/:id', component: MedicosComponent },
    )

  });

})
