import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
 selector: "app-card",
 templateUrl: './card.camponent.html',
 styleUrls: ['./card.camponent.scss']
})

export class CardComponent {

  @Input() title: string;
  @Input() status: string;
  @Input() date: any;
  @Output() onClick = new EventEmitter();

}