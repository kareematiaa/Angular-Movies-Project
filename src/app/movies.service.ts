import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) { }

  imgPath:string='http://image.tmdb.org/t/p/w500/'

  getTrending(mediaType:string):Observable<any>
  {
    return this._HttpClient.get(`http://api.themoviedb.org/3/trending/${mediaType}/week?api_key=f1aca93e54807386df3f6972a5c33b50`)
  } 

  getAll(page:number,types:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${types}/popular?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US&page=${page}`)
  } 
 
  getDetails(id:number,type:string):Observable<any>
  {
    return this._HttpClient.get(`http://api.themoviedb.org/3/${type}/${id}?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US`)
  } 
  getSimilar(id:number,type:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${type}/${id}/similar?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US&page=1`)
  } 
}
