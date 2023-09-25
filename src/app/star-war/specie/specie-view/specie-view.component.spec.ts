import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecieViewComponent } from './specie-view.component';

describe('SpecieViewComponent', () => {
  let component: SpecieViewComponent;
  let fixture: ComponentFixture<SpecieViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SpecieViewComponent]
    });
    fixture = TestBed.createComponent(SpecieViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
