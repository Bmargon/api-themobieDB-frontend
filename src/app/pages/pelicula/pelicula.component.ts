import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from 'src/app/providers/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  parametroUrl;
  pelicula: object = {};

  constructor( private active: ActivatedRoute,
               private ps: PeliculasService) {
    this.active.params.subscribe( (data: any) => this.parametroUrl = data.id);
    this.ps.getMovie(this.parametroUrl).subscribe((data: any) => {
      this.pelicula = data;
      console.log(this.pelicula);
    });
  }

  ngOnInit() {
  }

}
