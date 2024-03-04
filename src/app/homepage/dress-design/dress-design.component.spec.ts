import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DressDesignComponent } from './dress-design.component';

describe('DressDesignComponent', () => {
  let component: DressDesignComponent;
  let fixture: ComponentFixture<DressDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DressDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DressDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
