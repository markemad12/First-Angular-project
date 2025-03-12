import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
@Input () imgsrc: any
@Input () title: any
@Input () desc: any
@Input () btntext: any
@Input () id: any

@Output() btnEvent = new EventEmitter


constructor(private router:Router){}

navigateToRecipeDetalis(){
  this.router.navigate(['recipe',this.id])
}
}
