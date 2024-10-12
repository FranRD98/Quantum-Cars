class Coche {
    constructor(marca, modelo, motor, combustible, año, precio, imagenes, caracteristicas = []) {
        this.marca = marca;
        this.modelo = modelo;
        this.motor = motor;
        this.combustible = combustible;
        this.año = año;
        this.precio = precio;
        this.imagenes = imagenes;
        this.caracteristicas = caracteristicas;
    }

    // Getters para las propiedades
    get getMarca() {
        return this.marca;
    }

    get getModelo() {
        return this.modelo;
    }

    get getMotor() {
        return this.motor;
    }

    get getCombustible() {
        return this.combustible;
    }

    get getAño() {
        return this.año;
    }

    get getPrecio() {
        return this.precio;
    }

    get getImagenes() {
        return this.imagenes;
    }

    get getCaracteristicas() {
        return this.caracteristicas;
    }
}

export default Coche;