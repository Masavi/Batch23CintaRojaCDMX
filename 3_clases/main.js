class Animal{

    constructor(tamanio, color, especie, alimentacion){
        this.tamanio = tamanio;
        this.color = color;
        this.especie = especie;
        this.alimentacion = alimentacion;
    }

    //Get ->

    getTamanio(){
        return this.tamanio;
    }

    getColor(){
        return this.color;
    }

    //Set 

    setTamanio(tamanio){
        this.tamanio=tamanio;
    }

    setColor(color){
        this.color=color;
    }

    correr(){
        return "El animal esta corriendo y es de color" + this.color; 
    }

    irAlBanio(){
        return "El animal de "+this.tamanio+" esta en el trono";
    }

    saludar(color){
        return "El animal de color "+this.color+" saluda al animal de color "+color;
    }

    ladrar(perro){
        console.log("El animal de color "+this.color+" saluda al animal de color "+perro.getColor());
        console.log(perro.saludar(this.color));
    }

}

let perritoChihuahua = new Animal("Muy grande", "Verde", "Chihuahua", "Ninios")
let sanBernardo = new Animal("Gigante", "Morado", "San Bernardo", "Judios" )

console.log(perritoChihuahua.getColor());

console.log(perritoChihuahua.correr());

console.log(
    perritoChihuahua.saludar(sanBernardo.getColor())
);

perritoChihuahua.ladrar(sanBernardo)