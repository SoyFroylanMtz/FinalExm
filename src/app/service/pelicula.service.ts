import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map,mergeMap,toArray} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  
  private apiKey = '7ecbd05125f5ae0851d94ae1ddeaa816';
  private apiUrl = 'https://api.themoviedb.org/3';
  private resultsPerPahe=10;
  constructor(private http: HttpClient) {
    
   }
   getPopularMovies() {
    return this.http.get(`${this.apiUrl}/movie/popular?api_key=${this.apiKey}&page=1&language=es`)
    .pipe(mergeMap((data: any)=>data.results),
    toArray(),
    map((movies: any[])=>movies.slice(0,10)));
  }
}
