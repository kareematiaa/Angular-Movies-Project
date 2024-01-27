import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  currentId: any = 0
  currentType: any = ''

mediaType:string=''
  moviedetail: any = ''
  similarMovies: any[] = []
  imgPath: string = 'http://image.tmdb.org/t/p/w500/'

  constructor(private _ActivatedRoute: ActivatedRoute, private _MoviesService: MoviesService) {
    this.currentId = _ActivatedRoute.snapshot.params['id'];
    this.currentType = _ActivatedRoute.snapshot.params['type'];

  }

  getTrendingDetails() {
    this._MoviesService.getDetails(this.currentId, this.currentType).subscribe({
      next:(data)=>this.moviedetail = data
      //console.log(this.moviedetail);
    })
  }
  

  getSimilarMovies() {
    this._MoviesService.getSimilar(this.currentId, this.currentType).subscribe({
      next:(data)=>this.similarMovies = data.results.slice(0, 8)
    })

  }

   getAllSimilar(id:any,type:any)
   {
    this._MoviesService.getSimilar(id,type).subscribe({
      next:(data)=>this.similarMovies = data.results.slice(0, 8)
    })

    this._MoviesService.getDetails(id, type).subscribe({
      next:(data)=>this.moviedetail = data
    })
   }


  ngOnInit(): void {
    this.getTrendingDetails()
    this.getSimilarMovies()
  }

}
