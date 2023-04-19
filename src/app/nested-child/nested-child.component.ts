import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lch-nested-child',
  templateUrl: './nested-child.component.html',
  styleUrls: ['./nested-child.component.css']
})
export class NestedChildComponent implements OnInit {
  @Input() parentData = '';
  
  ngOnInit(): void {
    console.log('NestedChildComponent', this.parentData);
  }

}
