import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatContainerComponent } from './cat-container.component';

describe('CatContainerComponent', () => {
  let component: CatContainerComponent;
  let fixture: ComponentFixture<CatContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
