import Cl_vVuelo from "./Cl_vVuelo.js";
import Cl_mVuelo from "./Cl_mVuelo.js";
export default class Cl_vAerolinea {
  constructor() {
    this.controlador = null;
    this.mVuelo = null;
    this.vVuelo = new Cl_vVuelo(this);
    this.vista = document.getElementById("mainForm");
    this.tabla = document.getElementById("mainForm_tabla");
    this.btAgregar = document.getElementById("mainForm_btAgregar");
    this.lblIngresoTotal = document.getElementById("mainForm_lblIngresoTotal");
    this.lblMenorNumPasajeros = document.getElementById(
      "mainForm_lblMenorNumPasajeros"
    );
    this.lblPorcInternacionales = document.getElementById(
      "mainForm_lblPorcInternacionales"
    );
    this.btAgregar.onclick = () => this.ocultar();
    this.vVuelo.btAceptar.onclick = () => this.controlador.agregarVuelo();
    this.mostrar();
  }

  set controlador(c) {
    this._controlador = c;
  }
  get controlador() {
    return this._controlador;
  }

  agregarVuelo() {
    this.mVuelo = new Cl_mVuelo({
      numero: this.vVuelo.numero,
      tipo: this.vVuelo.tipo,
      costo: this.vVuelo.costo,
      pasajeros: this.vVuelo.pasajeros,
    });
    this.mostrar();
    return this.mVuelo;
  }
  mostrar() {
    this.vista.hidden = false;
    this.vVuelo.ocultar();
  }
  ocultar() {
    this.vista.hidden = true;
    this.vVuelo.mostrar();
  }
  reportarVuelo(ingresoTotal, menorCantPasajeros, porcInternacionales) {
    this.tabla.innerHTML += `
    <tr>
      <td>${this.vVuelo.numero}</td>
      <td>${this.vVuelo.tipo}</td>
      <td>${this.vVuelo.costo}</td>
      <td>${this.vVuelo.pasajeros}</td>
      <td>${this.mVuelo.ingreso()}</td>
    </tr>`;
    this.lblIngresoTotal.innerHTML = ingresoTotal;
    this.lblMenorNumPasajeros.innerHTML = menorCantPasajeros;
    this.lblPorcInternacionales.innerHTML = porcInternacionales;
  }
}
