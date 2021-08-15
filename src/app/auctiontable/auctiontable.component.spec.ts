import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctiontableComponent } from './auctiontable.component';

describe('AuctiontableComponent', () => {
  let component: AuctiontableComponent;
  let fixture: ComponentFixture<AuctiontableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuctiontableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctiontableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
