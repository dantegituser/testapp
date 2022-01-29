import { Injectable } from '@angular/core';
import { Persona } from '../data';
import {datos} from '../data'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data: Persona[] = datos;
  constructor() {}
  getData(){
    return this.data;
  }
}
