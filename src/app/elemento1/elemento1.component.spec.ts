import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Elemento1Component } from './elemento1.component';

describe('Elemento1Component', () => {
  let component: Elemento1Component;
  let fixture: ComponentFixture<Elemento1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Elemento1Component]
    });
    fixture = TestBed.createComponent(Elemento1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
