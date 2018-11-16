import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipesValidaFecha',
})
export class PipesValidaFechaPipe implements PipeTransform {

  

  transform(value: string): string {
    var vregexNaix = /^(0[1-9]|[1-2]\d|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/;
    return vregexNaix.test(value)? value: 'Dato corrupto';
  }

 

  
}
