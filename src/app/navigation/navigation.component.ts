import { Component, inject ,OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  private breakpointObserver = inject(BreakpointObserver);

  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  navegator(){
    this.router.navigate(['/navigation']);
    
  }
  pelicula(){
    this.router.navigate(['/peliculas']);
    
  }
  contacto(){
    this.router.navigate(['/users']);
    
  }
  logout(){
    this.router.navigate(['/examen']);
  }
  cartelera(){
    this.router.navigate(['/cartelera']);
  }
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    

    
}
