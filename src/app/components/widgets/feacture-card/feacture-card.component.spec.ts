import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeactureCardComponent } from './feacture-card.component';

describe('FeactureCardComponent', () => {
  let component: FeactureCardComponent;
  let fixture: ComponentFixture<FeactureCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeactureCardComponent]
    });
    fixture = TestBed.createComponent(FeactureCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
