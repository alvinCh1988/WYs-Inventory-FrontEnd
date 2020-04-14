import { Component, OnInit, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'table-expandable',
  templateUrl: './table-expandable.component.html',
  styleUrls: ['./table-expandable.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TableExpandableComponent implements OnInit {

  @Input() dataSource;
  @Input() columnsName;

  public columnsToDisplay = [];

  constructor() { }

  ngOnInit() {
    this.columnsToDisplay = Object.keys(this.dataSource[0]);
  }

}
