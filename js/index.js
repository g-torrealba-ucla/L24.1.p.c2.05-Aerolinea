import Cl_vAerolinea from "./Cl_vAerolinea.js";
import Cl_mAerolinea from "./Cl_mAerolinea.js";
import Cl_controlador from "./Cl_controlador.js";

export default class Cl_index {
  constructor() {
    let vista = new Cl_vAerolinea();
    let modelo = new Cl_mAerolinea();
    let controlador = new Cl_controlador(modelo, vista);
    vista.controlador = controlador;
  }
}
