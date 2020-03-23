import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { getEnabledCategories } from 'trace_events';
@Injectable({
  providedIn: 'root'
})
export class ChuckService {

  constructor(private http:HttpClient) { }
  getJoke(){
    return this.http.get('https://api.chucknorris.io/jokes/random');
  }
  getCategories(){
    return this.http.get('https://api.chucknorris.io/jokes/categories');
  }

  getJokeFromCategory(providedCategory){
    return this.http.get('http://api.chucknorris.io/jokes/random?category=' + providedCategory)
  }
}

