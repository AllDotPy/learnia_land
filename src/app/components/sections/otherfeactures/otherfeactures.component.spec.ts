import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherfeacturesComponent } from './otherfeactures.component';

describe('OtherfeacturesComponent', () => {
  let component: OtherfeacturesComponent;
  let fixture: ComponentFixture<OtherfeacturesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtherfeacturesComponent]
    });
    fixture = TestBed.createComponent(OtherfeacturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
