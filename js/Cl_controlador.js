import Cl_vAerolinea from "./Cl_vAerolinea.js";
import Cl_vVuelo from "./Cl_vVuelo.js";
import Cl_mAerolinea from "./Cl_mAerolinea.js";
import Cl_mVuelo from "./Cl_mVuelo.js";
export default class Cl_controlador {
  constructor(modelo, vista) {
    this.modelo = modelo;
    this.vista = vista;
  }
  agregarVuelo() {
    this.modelo.procesarVuelo(this.vista.agregarVuelo());
    this.vista.reportarVuelo(
      this.modelo.ingresoTotal(),
      this.modelo.menorCantPasajeros(),
      this.modelo.porcInternacionales()
    );
  }
}
