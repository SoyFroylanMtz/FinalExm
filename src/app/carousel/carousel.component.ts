import { Component,OnInit,Input } from '@angular/core';
import { PeliculaService } from './../service/pelicula.service';




@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],

})

export class CarouselComponent implements OnInit {
  popularMovies: any[] = [];
  currentImageIndex: number = 0;

  constructor(private moviesService: PeliculaService) {}

  ngOnInit() {
    this.moviesService.getPopularMovies().subscribe((data: any) => {
      this.popularMovies = data;
      this.startImageSlider();
    });
  }

  startImageSlider() {
    setInterval(() => {
      this.nextImage();
    }, 4000); // Cambiar la imagen cada 4 segundos (4000 ms)
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.popularMovies.length;
  }

  getCurrentImageUrl() {
    if (this.popularMovies.length > 0) {
      return 'https://image.tmdb.org/t/p/w500/' + this.popularMovies[this.currentImageIndex].poster_path;
    }
    return '';
  }
}