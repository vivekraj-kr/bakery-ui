import 'zone.js';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BakeryUi } from './bakery-ui';

describe('BakeryUi', () => {
  let component: BakeryUi;
  let fixture: ComponentFixture<BakeryUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BakeryUi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BakeryUi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
