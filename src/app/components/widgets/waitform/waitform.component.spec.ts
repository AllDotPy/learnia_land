import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitformComponent } from './waitform.component';

describe('WaitformComponent', () => {
  let component: WaitformComponent;
  let fixture: ComponentFixture<WaitformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WaitformComponent]
    });
    fixture = TestBed.createComponent(WaitformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
