import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularContainerComponent } from './popular-container.component';

describe('PopularContainerComponent', () => {
  let component: PopularContainerComponent;
  let fixture: ComponentFixture<PopularContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
