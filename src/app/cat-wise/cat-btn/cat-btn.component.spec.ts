import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatBtnComponent } from './cat-btn.component';

describe('CatBtnComponent', () => {
  let component: CatBtnComponent;
  let fixture: ComponentFixture<CatBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
