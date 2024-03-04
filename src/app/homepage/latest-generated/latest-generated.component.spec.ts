import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestGeneratedComponent } from './latest-generated.component';

describe('LatestGeneratedComponent', () => {
  let component: LatestGeneratedComponent;
  let fixture: ComponentFixture<LatestGeneratedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestGeneratedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestGeneratedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
