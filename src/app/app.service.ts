import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { User } from './models/User';
import { catchError, Observable } from 'rxjs';


interface Recipe {
  recipe_id: string;
  title: string;
  image_url: string;
  ingredients: string[];
}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }

  users:User[]=[
    {firstName:'Mark',age:20,salary:200000,extraInfo:'Test'},
    {firstName:'Mohamed',age:35,salary:500000},
    {firstName:'Fouad',age:20,salary:400000},
    {firstName:'Emad',age:15,salary:300000}
  ]
  url ="https://forkify-api.herokuapp.com/api/search?q=pizza"
  test!: Observable<any>;

  getRecipes(){
    console.log('from service');

    return this.http.get(this.url);
  }

  getRecipesDetalis(id: any): Observable<Recipe> {
    const url = `https://forkify-api.herokuapp.com/api/get?rId=${id}`;
    return this.http.get<Recipe>(url).pipe(
        catchError((error) => {
            console.error("Error fetching recipe details:", error);
            throw error;
        })
    );
  }
}
