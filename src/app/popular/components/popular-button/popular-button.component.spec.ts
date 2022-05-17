import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularButtonComponent } from './popular-button.component';

describe('PopularButtonComponent', () => {
  let component: PopularButtonComponent;
  let fixture: ComponentFixture<PopularButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
