import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Elemento4Component } from './elemento4.component';

describe('Elemento4Component', () => {
  let component: Elemento4Component;
  let fixture: ComponentFixture<Elemento4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Elemento4Component]
    });
    fixture = TestBed.createComponent(Elemento4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
