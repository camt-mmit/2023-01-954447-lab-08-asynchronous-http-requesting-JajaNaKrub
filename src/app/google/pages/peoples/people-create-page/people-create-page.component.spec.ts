import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleCreatePageComponent } from './people-create-page.component';

describe('PeopleCreatePageComponent', () => {
  let component: PeopleCreatePageComponent;
  let fixture: ComponentFixture<PeopleCreatePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PeopleCreatePageComponent]
    });
    fixture = TestBed.createComponent(PeopleCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
