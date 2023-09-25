import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglePageComponent } from './google-page.component';

describe('GooglePageComponent', () => {
  let component: GooglePageComponent;
  let fixture: ComponentFixture<GooglePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GooglePageComponent]
    });
    fixture = TestBed.createComponent(GooglePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
