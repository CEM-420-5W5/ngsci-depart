import { Component, Input, OnInit } from '@angular/core';
import { PlayableCard } from 'src/app/models/models';
import { CardComponent } from '../../components/card/card.component';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-battlefield',
    templateUrl: './battlefield.component.html',
    styleUrls: ['./battlefield.component.css'],
    standalone: true,
    imports: [NgFor, CardComponent]
})
export class BattlefieldComponent implements OnInit {

  @Input() cards: PlayableCard[] = [];
  @Input() align: string = 'top';

  constructor() { }

  ngOnInit() {
  }

}
