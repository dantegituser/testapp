import { Pipe, PipeTransform } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Persona } from '../data';

@Pipe({
  name: 'filterPipe',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(dataArray: Persona[], filtros: string[]): Persona[] {
console.log(filtros);

    if(filtros.length === 0){
      return dataArray
    }else{

      let result: any = [];
      for(let persona of dataArray){
        for(let f of filtros){
          if (Object.values(persona).indexOf(f) > -1) {
            result.push(persona)
          }
        }
      }
      return result;
    }
  }

}
