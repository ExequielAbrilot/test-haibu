import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipesComuna',
})
export class PipesComunaPipe implements PipeTransform {

  transform(value: string):string {

    if(value['nombre']){
      return value['nombre'];
    }else{
      if(typeof(value['comuna'])==='object'){
        return value['comuna'].nombre;
      }else{
        return value['comuna'];
      }      
    }
    
  }
}
