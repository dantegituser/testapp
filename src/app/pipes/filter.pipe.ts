import { Pipe, PipeTransform } from '@angular/core';
import { Persona } from '../data';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipe implements PipeTransform {

  transform(dataArray: Persona[], month: string ): Persona[] {
    const newArray = dataArray.filter(persona => persona.month === month)
    return newArray;
  }

}
