import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleViewPageComponent } from './people-view-page.component';

describe('PeopleViewPageComponent', () => {
  let component: PeopleViewPageComponent;
  let fixture: ComponentFixture<PeopleViewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PeopleViewPageComponent]
    });
    fixture = TestBed.createComponent(PeopleViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
