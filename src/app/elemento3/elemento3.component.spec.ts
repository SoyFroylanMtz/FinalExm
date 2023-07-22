import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Elemento3Component } from './elemento3.component';

describe('Elemento3Component', () => {
  let component: Elemento3Component;
  let fixture: ComponentFixture<Elemento3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Elemento3Component]
    });
    fixture = TestBed.createComponent(Elemento3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
