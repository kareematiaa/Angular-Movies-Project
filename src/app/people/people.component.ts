import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  trendingPeople:any[]=[]
  pages:any=new Array(10)
  term:any=''

  imgPath:string='http://image.tmdb.org/t/p/w500/'

  constructor(private _MoviesService:MoviesService) { }

  showAll(page:number)
  {
    this._MoviesService.getAll(page,'person').subscribe({
      next:(data) => this.trendingPeople = data.results
     })
  }


  ngOnInit(): void {
    this.showAll(1)
  }

}
