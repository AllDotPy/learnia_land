import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdviewComponent } from './mdview.component';

describe('MdviewComponent', () => {
  let component: MdviewComponent;
  let fixture: ComponentFixture<MdviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MdviewComponent]
    });
    fixture = TestBed.createComponent(MdviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
