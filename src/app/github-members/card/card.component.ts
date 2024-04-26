import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

@Input() login      : string = "";
@Input() avatar_url : string = "";
@Input() html_url   : string = "";


}
