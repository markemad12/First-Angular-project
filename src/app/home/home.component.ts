import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { User } from '../models/User';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

users: User[] | undefined 
testobs:Observable<any> | undefined

recipes: any;
constructor(private appService:AppService){}

  ngOnDestroy(): void {
  console.log('destroy home');
  
  }

ngOnInit(): void{

  this.users = this.appService.users
  this.getRecipes()
}

getRecipes(){
  this.appService.getRecipes().subscribe((res:any)=>{
    this.recipes = res.recipes
    console.log(this.recipes);
    
    
  },(err: any)=>{
console.log(err);

  })
}
}