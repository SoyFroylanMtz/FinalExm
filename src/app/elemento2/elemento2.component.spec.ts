import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Elemento2Component } from './elemento2.component';

describe('Elemento2Component', () => {
  let component: Elemento2Component;
  let fixture: ComponentFixture<Elemento2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Elemento2Component]
    });
    fixture = TestBed.createComponent(Elemento2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
