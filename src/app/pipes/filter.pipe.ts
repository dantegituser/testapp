import { Pipe, PipeTransform } from '@angular/core';
import { Persona } from '../data';


@Pipe({
  name: 'filterPipe'
})
export class FilterPipe implements PipeTransform {
  constructor(){}

  transform(dataArray: Persona[], filtros: string[]): Persona[] {
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
      // let total = 0;
      // for(let obj of result){
      //   total+= obj.amount;
      // }
      return result;
    }
  }

}
