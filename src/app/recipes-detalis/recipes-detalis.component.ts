import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute} from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-recipes-detalis',
  templateUrl: './recipes-detalis.component.html',
  styleUrls: ['./recipes-detalis.component.scss']
})
export class RecipesDetalisComponent  implements OnInit{

recipeDetails: any;

 recipeid: any;

 isloading:boolean = true;

  constructor( private appservice:AppService, private activatedRouter:ActivatedRoute){

  }
  ngOnInit(): void {
   this.recipeid= this.activatedRouter.snapshot.paramMap.get('id')
   this.getRecipesDetalis(this.recipeid)
  }

  getRecipesDetalis(id: any){
    this.appservice.getRecipesDetalis(id).subscribe((res)=>{
      this.recipeDetails = res
      this.isloading = false;
      console.log("recipedetails",this.recipeDetails);
      
    },(erro)=>{

    })
  }

}
