import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  trendingMovies:any[]=[]
  imgPath:string='http://image.tmdb.org/t/p/w500/'

  constructor(private _MoviesService:MoviesService) { }

  pages:any=new Array(10)
  term:string=''

  showAll(page:number)
  {
    this._MoviesService.getAll(page,'movie').subscribe({
      next:(data) => this.trendingMovies = data.results
     })
  }

  ngOnInit(): void {
    this.showAll(1)
  }

}
