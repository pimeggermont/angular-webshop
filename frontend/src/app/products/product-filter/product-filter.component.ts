import { Component, OnInit } from '@angular/core';
import { Filter } from '../../../models/Filter';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit{
  
  filters = [];

  constructor() {
    
  }

  ngOnInit(): void {
    for (let i = 0; i < 5; i++) {
      this.filters.push(new Filter("FILTER", true));
    }
  }
}
