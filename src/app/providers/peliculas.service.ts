import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {


  private apiKey = 'bb0aa53f6a5924b7fbfedf8741ddd4a8';
  private urlMoviedb = 'https://api.themoviedb.org/3';
  private fecha = new Date();

  constructor( private http: HttpClient,
               private jsonp: HttpClientJsonpModule
               ) { }

// peticione jsonP
  getPopulares() {
    const url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc?&api_key=${this.apiKey}&callback=JSONP_CALLBACK`;

    return this.http.jsonp(url, '').pipe(map( (data: any) => {
      return data.results;
    }));
  }

  getCartelera() {

    const fechaActual = this.getDateNow();
    const fechaHaceUnAnno = this.getDateAYearAgo();

    // tslint:disable-next-line:max-line-length
    const urCartelera = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${fechaHaceUnAnno}&primary_release_date.lte=${fechaActual}&api_key=${this.apiKey}&callback=JSONP_CALLBACK`;

    return this.http.jsonp(urCartelera, '').pipe(map( (data: any) => {
      return data.results;
    }));
  }

  getNinnos() {
    // tslint:disable-next-line:max-line-length
    const urlNinnos = `${this.urlMoviedb}/discover/movie?certification_country=ES&certification.lte=G&sort_by=popularity.desc&api_key=${this.apiKey}&callback=JSONP_CALLBACK`;

    return this.http.jsonp(urlNinnos, '').pipe(map( (data: any) => {
      return data.results;
    }));
  }


  // fechas
  getDateNow(): string {
    let fecha: string;
    const yyyy = this.fecha.getFullYear();
    let mm: any = this.fecha.getMonth() + 1;
    let dd: any = this.fecha.getDate();

    if (dd < 10) {
      dd = '0' + dd.toString();
    }
    if ( mm < 10) {
      mm = '0' + mm.toString();
    }
    fecha = yyyy + '-' + mm + '-' + dd;

    return fecha;
  }

  getDateAYearAgo(): string {
    let fecha: string;
    const yyyy = this.fecha.getFullYear() - 1;
    let mm: any = this.fecha.getMonth() + 1;
    let dd: any = this.fecha.getDate();

    if (dd < 10) {
      dd = '0' + dd.toString();
    }
    if ( mm < 10) {
      mm = '0' + mm.toString();
    }
    fecha = yyyy + '-' + mm + '-' + dd;

    return fecha;
  }

  // BUSCADOR

  buscarPelicula( busqueda: string ) {

    // tslint:disable-next-line:max-line-length
    const urlBusca = `${ this.urlMoviedb }/search/movie?query=${ busqueda }&sort_by=popularity.desc&api_key=${ this.apiKey }&language=es&callback=JSONP_CALLBACK`;

    return this.http.jsonp( urlBusca, '' ).pipe(map( (data: any ) =>  data));
  }


  // burcador peliculas
  getMovie(id: string) {
    const urlPeli = `${this.urlMoviedb}/movie/${id}?api_key=${this.apiKey}`;
    return this.http.get(urlPeli).pipe(map( (data: any) => data));
  }

  // https://api.themoviedb.org/3/movie/403300?api_key=bb0aa53f6a5924b7fbfedf8741ddd4a8
}
