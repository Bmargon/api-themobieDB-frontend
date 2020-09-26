import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

 noImagen = './assets/img/no-imagen.jpg';
  url = 'http://image.tmdb.org/t/p/w500';

  transform( value: any ): any {


    if ( value === null || '') {

      return this.noImagen;

    } else {

      return this.url + value;

    }
  }

}
