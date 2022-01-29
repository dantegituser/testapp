import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unique'
})
export class UniquePipe implements PipeTransform {

  transform(filtros: any[]): any[] {
    if(filtros.length === 0){
      return []
    }
    let active:string[] = []
    let months:string[] = []
    let phases:string[] = []
   const arr = filtros.map(item => {
     if(item[0] === 'status'){
       active.push(item[1])
      }else if(item[0] === 'months'){
        item[1].forEach((indiv:any) => {
          months.push(indiv)
        })
      }else if(item[0] === 'phases'){
        item[1].forEach((indiv:any) => {
          phases.push(indiv)
        })
      }else{
       active.push(item[1])
     }
   })
   let activeList= ['status', active]
   let monthlist = [...new Set(months)]
   let monthlistSt = ['months', monthlist.toString()]
   let phaseslist = [...new Set(phases)]
   let phaseslistSt = ['phases', phaseslist.toString()]
    return [activeList, monthlistSt, phaseslistSt];
  }

}
