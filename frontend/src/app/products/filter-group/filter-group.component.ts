import { Component, OnInit, Input } from '@angular/core';
import { Filter } from '../../../models/Filter';

@Component({
  selector: 'app-filter-group',
  templateUrl: './filter-group.component.html',
  styleUrls: ['./filter-group.component.css']
})
export class FilterGroupComponent implements OnInit {

  @Input() filters:Filter[];
  title:string = 'filter-groep-title'
  constructor() { }

  ngOnInit() {
  }

}
