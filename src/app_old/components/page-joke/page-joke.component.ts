import { Component, OnInit } from '@angular/core';
import { ChuckService } from 'src/app/services/chuck.service';
import { ChuckApi } from "../../models/chuck-api";
@Component({
  selector: 'app-page-joke',
  templateUrl: './page-joke.component.html',
  styleUrls: ['./page-joke.component.css']
})
export class PageJokeComponent implements OnInit {
  joke
  constructor(private cs:ChuckService) { }

  ngOnInit(): void {
    this.cs.getJoke().subscribe((response: ChuckApi)=>{
      this.joke = response.value;
    })
    this.cs.getCategories().subscribe((response: string[] ))
  }

}
