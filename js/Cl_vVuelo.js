export default class Cl_vVuelo {
  constructor() {
    this.vista = document.getElementById("vueloForm");
    this.inNumero = document.getElementById("vueloForm_inNumero");
    this.inTipo = document.getElementById("vueloForm_inTipo");
    this.inCosto = document.getElementById("vueloForm_inCosto");
    this.inPasajeros = document.getElementById("vueloForm_inPasajeros");
    this.btAceptar = document.getElementById("vueloForm_btAceptar");
  }
  get numero() {
    return +this.inNumero.value;
  }
  get tipo() {
    return +this.inTipo.value;
  }
  get costo() {
    return this.inCosto.value;
  }
  get pasajeros() {
    return this.inPasajeros.value;
  }
  mostrar() {
    this.vista.hidden = false;
  }
  ocultar() {
    this.vista.hidden = true;
  }
}
