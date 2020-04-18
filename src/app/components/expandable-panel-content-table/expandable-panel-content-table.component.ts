import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'expandable-panel-content-table',
  templateUrl: './expandable-panel-content-table.component.html',
  styleUrls: ['./expandable-panel-content-table.component.scss']
})
export class ExpandablePanelContentTableComponent implements OnInit {

  panelOpenState = false;
  
  @Input() dataSource;

  constructor() { }

  ngOnInit(): void {
  }

}
