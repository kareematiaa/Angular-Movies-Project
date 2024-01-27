import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.css']
})
export class TvshowsComponent implements OnInit {

  
  imgPath:string='http://image.tmdb.org/t/p/w500/'
  trendingTv:any[]=[]
  pages:any=new Array(10)
  term:any=''
  constructor(private _MoviesService:MoviesService) { }

  showAll(page:number)
  {
    this._MoviesService.getAll(page,'tv').subscribe({
      next:(data) => this. trendingTv = data.results
     })
  }

  ngOnInit(): void {
    this.showAll(9)
  }

}
