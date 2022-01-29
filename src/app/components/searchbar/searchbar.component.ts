import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  @Output() open = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }
  openFilters(){
    this.open.emit(true)
  }

}
