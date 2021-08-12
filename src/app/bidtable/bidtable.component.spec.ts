import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidtableComponent } from './bidtable.component';

describe('BidtableComponent', () => {
  let component: BidtableComponent;
  let fixture: ComponentFixture<BidtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidtableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BidtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
