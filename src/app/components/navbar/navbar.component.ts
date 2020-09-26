import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculasService } from 'src/app/providers/peliculas.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private router: Router,
               private ps: PeliculasService) {
   }

  busqueda: any [] = [];

  buscado(cuadroBusqueda) {

    // redireccion
    this.router.navigate(['/busqueda', cuadroBusqueda]);

  }

  ngOnInit() {
  }

}
