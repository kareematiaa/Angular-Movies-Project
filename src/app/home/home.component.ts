import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {
 
  constructor(private _MoviesService:MoviesService) { }

  term:string=''
  trendingMovies:any[]=[]
  trendingTv:any[]=[]
  trendingPeople:any[]=[]

  imgPath:string='http://image.tmdb.org/t/p/w500/'
  
  ngOnInit(): void {

   this._MoviesService.getTrending('movie').subscribe({
    next:(data) => this.trendingMovies = data.results.slice(0,10)
   })
   this._MoviesService.getTrending('tv').subscribe({
    next:(data) => this.trendingTv = data.results.slice(0,10)
   })
   this._MoviesService.getTrending('person').subscribe({
    next:(data) => this.trendingPeople = data.results.filter((item:any)=>item.profile_path !==null).slice(0,10)
   })
   
  }

}
