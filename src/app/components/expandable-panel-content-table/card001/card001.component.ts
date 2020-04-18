import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card001',
  templateUrl: './card001.component.html',
  styleUrls: ['./card001.component.scss']
})
export class Card001Component implements OnInit {

  @Input() dataSource;

  constructor() { }

  ngOnInit() {
    console.log('====>', this.dataSource)
  }

}
