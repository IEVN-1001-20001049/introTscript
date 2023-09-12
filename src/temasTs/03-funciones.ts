

//funciones

function sumar(a:number,b:number):number{
    return a+b;
}

const resultado = sumar(4,6);

console.log(resultado);

function multiplicar(n1:number,otronumero:number, base:number=3):number{
    let tem=n1*base;
    return tem;
}

console.log(multiplicar(6,5));

interface Mascota{
    nombre:string;
    edad:number;
    mostrarEdad:()=>void;
}
function calcular(mascota:Mascota, x:number):void{
    mascota.edad+=x;
    console.log(mascota);
}

const nuevaMascota:Mascota={
    nombre:'Miau',
    edad:2,
    mostrarEdad(){
        console.log('la edad es: ',this.edad);
    },
}
calcular(nuevaMascota,3)