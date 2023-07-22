import { Component, OnInit } from '@angular/core';
import { MoviedbService } from './../service/moviedb.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  movies: any[] = [];
  pageSize: number = 10; // Define cuántas películas mostrar por página
  currentPage: number = 1;
  totalSections: number = 10; // Define el número total de secciones
  currentSection: number = 1;
  totalPages: number = 1; // Variable para almacenar el número total de páginas

  constructor(private moviedbService: MoviedbService) {}

  ngOnInit(): void {
    this.loadMovies();
  }
  getImageUrl(posterPath: string | null): string {
    if (!posterPath) {
      return 'assets/placeholder-image.jpg'; // Si no hay poster_path, mostrar una imagen de marcador de posición
    }
    return 'https://image.tmdb.org/t/p/w200' + posterPath;
  }
  loadMovies(): void {
    this.moviedbService.getMoviesByPage(this.currentPage).subscribe(
      (data) => {
        this.movies = data.results; // Obtenemos las películas
        this.totalPages = data.total_pages; // Obtenemos el número total de páginas
      },
      (error) => {
        console.error('Error al obtener las películas:', error);
      }
    );
  }

  onPageChange(page: number) {
    if (page < 1) {
      // Asegurarnos de que el número de página no sea menor que 1
      page = 1;
    } else if (page > this.totalPages) {
      // Asegurarnos de que el número de página no sea mayor que el total de páginas
      page = this.totalPages;
    }
    this.currentPage = page;
    this.loadMovies();
  }

  onSectionChange(section: number) {
    if (section < 1) {
      // Asegurarnos de que el número de sección no sea menor que 1
      section = 1;
    } else if (section > this.totalSections) {
      // Asegurarnos de que el número de sección no sea mayor que el total de secciones
      section = this.totalSections;
    }
    this.currentSection = section;
    this.currentPage = (section - 1) * this.pageSize + 1;
    this.loadMovies();
  }
}
