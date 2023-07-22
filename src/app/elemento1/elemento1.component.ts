import { Component } from '@angular/core';
import { inject ,OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-elemento1',
  templateUrl: './elemento1.component.html',
  styleUrls: ['./elemento1.component.css']
})
export class Elemento1Component implements OnInit {
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
  logout(){
    this.router.navigate(['/examen']);
  }
  contacto(){
    this.router.navigate(['/users']);
    
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    

    
}
