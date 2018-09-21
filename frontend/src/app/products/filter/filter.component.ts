import { Component, OnInit, Input } from '@angular/core';
import { Filter } from '../../../models/Filter';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input() filter: Filter;

  constructor() { }

  ngOnInit() {
    console.log(this.filter);
  }

}
