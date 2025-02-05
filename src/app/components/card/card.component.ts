import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/models';
import { MatCardModule } from '@angular/material/card';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
    standalone: true,
    imports: [NgIf, MatCardModule]
})
export class CardComponent implements OnInit {

  @Input() card?:Card;
  @Input() show:string = "front";
  @Input() health:number = 0;
  beautifulBackUrl = "https://i.pinimg.com/236x/3c/73/0d/3c730d6df70700a3c912a3c87d6d2027.jpg";

  constructor() { }

  ngOnInit() {

  }

}
