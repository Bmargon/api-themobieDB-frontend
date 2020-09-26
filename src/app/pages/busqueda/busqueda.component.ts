import { Component, Input } from '@angular/core';
import { PeliculasService } from 'src/app/providers/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent  {

  resultado: any [] = [];
  search: string;

  constructor( private ps: PeliculasService, private active: ActivatedRoute) {
    this.active.params.subscribe( data => {
      this.search =  data.id;
      // pasar a infor a array para luego hacer un input
      this.ps.buscarPelicula(data.id).subscribe( resul => {
      this.resultado = resul.results;
      });
    });

  }


}
