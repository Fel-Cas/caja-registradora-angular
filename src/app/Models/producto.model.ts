export class Producto{
    nombre: string;
    imgUrl: string;
    precio: number;
    cantidad:number;

    constructor(nombre:string, imagen:string, precio:number){
        this.nombre=nombre;
        this.imgUrl=imagen;
        this.precio=precio;
        this.cantidad=1;
    }
}