import { Component } from '@angular/core';
import { Producto } from './Models/producto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  comidas: Producto[];
  bebidas:Producto[];

  productosSeleccionados: Producto[];
  constructor(){
    this.comidas=[
      new Producto('Cocido','https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.a45jXMSGc5MsM7NfR-zLGgHaE8%26pid%3DApi&f=1',10.50 ),
      new Producto('Paella','https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.u2B9zuMSz5WlivAL0V-jBQHaE8%26pid%3DApi&f=1',12.20),
      new Producto('Cachopo','https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.qRR-JPirsfKASPbj3_X94QHaEv%26pid%3DApi&f=1',15.75),
      new Producto('Pizza','https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.VJheVPW-C9sgHDbv1uOX4QHaFn%26pid%3DApi&f=1',7.80),
      new Producto('Pasta','https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.KKl5pAYyve4RsPOiUYrQMAHaF7%26pid%3DApi&f=1',6.90),
      new Producto('Hamburguesa','https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.faJsyjALuNt0OcW3gGLkowFNC7%26pid%3DApi&f=1',5.75),
    ];
    this.bebidas=[
      new Producto('Coca Cola','https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.wpf5Tr4pkF76mVigM5tIcAHaE7%26pid%3DApi&f=1',1.75),
      new Producto('Fanta','https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.eStRYYqUAVs5nMTLNjVivAHaFj%26pid%3DApi&f=1',1.65),
      new Producto('Cerveza','https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.I59ltQPc6g7oXKVPyl3oRAHaE8%26pid%3DApi&f=1',3.65),
      new Producto('Jugos','https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.explicit.bing.net%2Fth%3Fid%3DOIP.fZYtXtH0IXG9x9HaJhIb0wHaEt%26pid%3DApi&f=1',3.43),

    ];
    this.productosSeleccionados=[];
  }

  onProductoSeleccionado($event: Producto){
    /* this.productosSeleccionados.push(producto) */
    const productoEncontrado=this.productosSeleccionados.find(producto=> producto.nombre===$event.nombre);
    if(productoEncontrado){
      productoEncontrado.cantidad++;
    }else{
      this.productosSeleccionados.push($event)
    }
  }

}
