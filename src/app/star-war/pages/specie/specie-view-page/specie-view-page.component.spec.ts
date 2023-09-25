import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecieViewPageComponent } from './specie-view-page.component';

describe('SpecieViewPageComponent', () => {
  let component: SpecieViewPageComponent;
  let fixture: ComponentFixture<SpecieViewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SpecieViewPageComponent]
    });
    fixture = TestBed.createComponent(SpecieViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
