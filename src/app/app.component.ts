import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   nombre:string = "Hernán";
   nombre2:string = "hernan ricARdo AreNA";
   arreglo:number[]=[1,2,3,4,5,6,7,8,9,10];
   PI:number = Math.PI;
   a:number = 0.234;
   salario:number = 1234.5;
   activar:boolean = true;

   heroe = {
     nombre:'Logan',
     clave:'Wolverine',
     direccion:{
       calle:'Primera',
       casa:'19'
     }
   };
   valorDePromesa = new Promise( (resolve,reject)=>{
     setTimeout(()=>resolve("Llego la data"),3500);
   });
   fecha:Date = new Date();
   video = "Lw_Qlu4Y1dk";

}
