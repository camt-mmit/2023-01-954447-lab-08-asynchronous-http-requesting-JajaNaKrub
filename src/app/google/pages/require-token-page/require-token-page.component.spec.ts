import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequireTokenPageComponent } from './require-token-page.component';

describe('RequireTokenPageComponent', () => {
  let component: RequireTokenPageComponent;
  let fixture: ComponentFixture<RequireTokenPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RequireTokenPageComponent]
    });
    fixture = TestBed.createComponent(RequireTokenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
