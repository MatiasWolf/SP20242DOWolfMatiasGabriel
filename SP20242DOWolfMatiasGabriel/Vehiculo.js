export class Vehiculo {
    constructor(id, modelo, anoFabricacion, velMax) {
        this.id = id;
        this.modelo = modelo;
        this.anoFabricacion = anoFabricacion;
        this.velMax = velMax;
    }

    toString() {
        return `Vehiculo: Modelo: ${this.modelo}, Año: ${this.anoFabricacion}, Velocidad Máx.: ${this.velMax} km/h`;
    }
}