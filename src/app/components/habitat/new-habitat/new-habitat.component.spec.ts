import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHabitatComponent } from './new-habitat.component';

describe('NewHabitatComponent', () => {
  let component: NewHabitatComponent;
  let fixture: ComponentFixture<NewHabitatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewHabitatComponent]
    });
    fixture = TestBed.createComponent(NewHabitatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
