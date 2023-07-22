import { Component, OnInit } from '@angular/core';
import { MoviedbService } from './../service/moviedb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movies: any[] = [];
  pageSize: number = 10; // Define cuántas películas mostrar por página
  currentPage: number = 1;
  totalSections: number = 10; // Define el número total de secciones
  currentSection: number = 1;
  totalPages: number = 1; // Variable para almacenar el número total de páginas
  filteredMovies: any[] = []; 

  constructor(private moviedbService: MoviedbService, private router: Router) {}

  ngOnInit(): void {
    this.totalSections = Math.ceil(this.totalPages / this.pageSize);
    this.loadMovies();
  }
  filterMovies(searchText: string) {
    searchText = searchText.toLowerCase().trim(); // Convertir el texto de búsqueda a minúsculas y eliminar espacios en blanco

    // Filtrar las películas en base al título
    this.filteredMovies = this.movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchText)
    );
  }

  // Método para realizar la búsqueda al presionar el botón de búsqueda o al presionar Enter
  buscarPelicula(searchText: string) {
    this.filterMovies(searchText);
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
      page = 1;
    } else if (page > this.totalPages) {
      page = this.totalPages;
    }
  
    // Calcular la sección actual en base a la página seleccionada
    this.currentSection = Math.ceil(page / this.pageSize);
  
    // Actualizar la página actual
    this.currentPage = page;
  
    this.loadMovies();
  }

  onSectionChange(section: number) {
    if (section < 1) {
      section = 1;
    } else if (section > this.totalSections) {
      section = this.totalSections;
    }
  
    // Actualizar la sección actual
    this.currentSection = section;
  
    // Calcular la página inicial de la sección
    this.currentPage = (section - 1) * this.pageSize + 1;
  
    this.loadMovies();
  }
}