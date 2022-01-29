import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-filtermodal',
  templateUrl: './filtermodal.component.html',
  styleUrls: ['./filtermodal.component.css']
})
export class FiltermodalComponent implements OnInit {

  myform!: FormGroup;
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  phases = ['Research', 'Ideation', 'Development', 'Deployment']
  values:any;
  @Output() close = new EventEmitter<boolean>();
  @Output() filters = new EventEmitter<any>();
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.myform = this.fb.group({
      'Active':[null],
      'Pending Approval' :[null],
      'Waiting Compensation' :[null],
      months: [''],
      phases: [''],
    })
  }
  onClose(){
    this.close.emit(true);
  }

  onSubmit(){
    this.values = {...this.myform.value}
    this.filters.emit(this.values)
    this.onClose()

  }

  changemonth(event:any){
    if(event.isUserInput){
      this.myform.get('months')?.setValue(event.source.value)
    }
  }
  changephase(event:any){
    if(event.isUserInput){
      this.myform.get('phases')?.setValue(event.source.value)
    }
  }

}
