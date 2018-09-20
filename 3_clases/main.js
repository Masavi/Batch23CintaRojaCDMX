/*class Animal{

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

}*/

/*let perritoChihuahua = new Animal("Muy grande", "Verde", "Chihuahua", "Ninios")
let sanBernardo = new Animal("Gigante", "Morado", "San Bernardo", "Judios" )

console.log(perritoChihuahua.getColor());

console.log(perritoChihuahua.correr());

console.log(
    perritoChihuahua.saludar(sanBernardo.getColor())
);

perritoChihuahua.ladrar(sanBernardo)

perritoChihuahua.setColor("Naranja")
console.log(perritoChihuahua.getColor());
*/

class Persona{

    constructor(nombre, fecha, sexo, peso, altura){
        this.nombre=nombre;
        this.fecha=fecha;
        this.sexo=sexo;
        this.peso=peso;
        this.altura=altura;
    }

    calcularIMC(){
        return this.peso/(this.altura * this.altura);
    }

    isMayor(){
        //1997-07-15
        let year=this.fecha.split("-");
        if((2018-parseInt(year[0])) >= 18){
            return true;
        }else{
            return false;
        }
    }

    calcularRFC(){
        let nombre=this.nombre.split(" ");
        let apellidoPaterno=nombre[1]
        let letraUno=apellidoPaterno[0];
        let letraDos;

        for(let i=1; i<apellidoPaterno.length; i++){
            if(apellidoPaterno[i].toLowerCase()=="a" || apellidoPaterno[i].toLowerCase()=="e" || apellidoPaterno[i].toLowerCase()=="i" || apellidoPaterno[i].toLowerCase()=="o" || apellidoPaterno[i].toLowerCase()=="u"){
                letraDos=apellidoPaterno[i].toUpperCase();
                break;
            }
        }

        let apellidoMaterno = nombre[2];
        let letraTres = apellidoMaterno[0];
        let n=nombre[0];
        let letraCuatro=n[0];
        let year=this.fecha.split("-");
        let anio = year[0][2] + year[0][3];

        return letraUno+letraDos+letraTres+letraCuatro+anio+year[1]+year[2];


    }
}

let p1 = new Persona("Gerardo Arjona Jimenez", "1997-07-15", "H", 60, 1.73);

console.log(p1.calcularIMC());
console.log(p1.isMayor());
console.log(p1.calcularRFC());
