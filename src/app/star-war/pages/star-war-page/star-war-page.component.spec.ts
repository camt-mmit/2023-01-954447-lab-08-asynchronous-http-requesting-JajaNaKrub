import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarPageComponent } from './star-war-page.component';

describe('StarWarPageComponent', () => {
  let component: StarWarPageComponent;
  let fixture: ComponentFixture<StarWarPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StarWarPageComponent]
    });
    fixture = TestBed.createComponent(StarWarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
