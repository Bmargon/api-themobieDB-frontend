import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/providers/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cartelera: any [] = [];
  populares: any [] = [];
  ninnos: any [] = [];

  constructor( private ps: PeliculasService) {

  }


  ngOnInit() {

    this.ps.getCartelera().subscribe( (data: any) => {
      this.cartelera = data;
    });

    this.ps.getNinnos().subscribe( (data: any) => {
         this.ninnos = data;
       });

    this.ps.getPopulares().subscribe( (data: any) => {
      this.populares = data;
      console.log(this.populares);

    });
  }

}

