import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetListPageComponent } from './planet-list-page.component';

describe('PlanetListPageComponent', () => {
  let component: PlanetListPageComponent;
  let fixture: ComponentFixture<PlanetListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PlanetListPageComponent]
    });
    fixture = TestBed.createComponent(PlanetListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
