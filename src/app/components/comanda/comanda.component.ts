import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/Models/producto.model';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {

  @Input() productos: Producto[];
  constructor() {
    this.productos 
    =[];
   }

  ngOnInit(): void {
  }

  calcularTotal(){
    let resultado=0;
    for(let producto of this.productos){
      resultado+=producto.precio* producto.cantidad;
    }
    return resultado.toFixed(2);
  }

  eliminarProducto(indice:number){
    if(this.productos[indice].cantidad==1){
      this.productos.splice(indice,1)
    }else{
      this.productos[indice].cantidad-=1
    }
   
  }
}
