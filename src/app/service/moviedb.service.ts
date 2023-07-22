import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviedbService {
  private apiKey = '7ecbd05125f5ae0851d94ae1ddeaa816'; // Reemplaza 'TU_API_KEY' con tu clave de API de moviedb
  private apiUrl = 'https://api.themoviedb.org/3';
  private discoverUrl = `${this.apiUrl}/discover/movie`;

  constructor(private http: HttpClient) {}

  getPopularMovies(): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}/movie/popular?api_key=${this.apiKey}&language=en-US&page=1`);
  }
  getMoviesByPage(page: number): Observable<any> {
    const params = {
      api_key: this.apiKey,
      language: 'es-ES',
      sort_by: 'popularity.desc',
      page: page.toString(),
    };

    return this.http.get<any>(this.discoverUrl, { params });
  }
}