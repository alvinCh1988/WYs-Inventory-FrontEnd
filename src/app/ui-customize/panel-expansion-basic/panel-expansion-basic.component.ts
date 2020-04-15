import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'panel-expansion-basic',
  templateUrl: './panel-expansion-basic.component.html',
  styleUrls: ['./panel-expansion-basic.component.scss']
})
export class PanelExpansionBasicComponent implements OnInit {

  panelOpenState = false;

  @Input() dataSource;

  constructor() { }

  ngOnInit() {
  }

}
