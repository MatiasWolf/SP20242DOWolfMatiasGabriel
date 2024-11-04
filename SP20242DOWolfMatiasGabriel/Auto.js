import { Vehiculo } from "./Vehiculo.js";

export class Auto extends Vehiculo {
    constructor(id, modelo, anoFabricacion, velMax, cantidadPuertas, asientos) {
        super(id, modelo, anoFabricacion, velMax);

        this.cantidadPuertas = cantidadPuertas;
        this.asientos = asientos;
    }

    toString() {
        return `${super.toString()}, Puertas: ${this.cantidadPuertas}, Asientos: ${this.asientos}`;
    }
}